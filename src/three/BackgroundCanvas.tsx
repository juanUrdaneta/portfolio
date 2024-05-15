import React from "react";
import * as THREE from "three";
import vertexShader from "./shaders/test/vertex.glsl";
import fragmentShader from "./shaders/test/fragment.glsl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SB_COLOR } from "./colors";

// const interpolateColors = (startIndex: number, endIndex: number, progress: number) => {
//   const newColorX = gsap.utils.interpolate(
//     COLORS_ARRAY[startIndex].x,
//     COLORS_ARRAY[endIndex].x,
//     progress
//   );
//   const newColorY = gsap.utils.interpolate(
//     COLORS_ARRAY[startIndex].y,
//     COLORS_ARRAY[endIndex].y,
//     progress
//   );
//   const newColorZ = gsap.utils.interpolate(
//     COLORS_ARRAY[startIndex].z,
//     COLORS_ARRAY[endIndex].z,
//     progress
//   );
//   console.log({ x: newColorX, y: newColorY, z: newColorZ });
//   return { x: newColorX, y: newColorY, z: newColorZ };
// };

const BackgroundCanvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  useGSAP(() => {
    if (canvasRef.current) {
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      const scene = new THREE.Scene();
      const aspectRatio = window.innerWidth / window.innerHeight;
      const camera = new THREE.OrthographicCamera(-aspectRatio, aspectRatio, 1, -1, 0, 1);
      camera.position.z = 1;
      scene.add(camera);
      //
      const geometry = new THREE.PlaneGeometry(2 * aspectRatio, 2, 32, 32);
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.DoubleSide,
      });
      material.uniforms = {
        uTime: {
          value: 0,
        },
        uScrollPos: {
          value: 0,
        },
        // TRANSFORM THIS INTO FLOAT32ARRAY
        uColor: {
          value: [
            new THREE.Color(SB_COLOR.x),
            new THREE.Color(SB_COLOR.y),
            new THREE.Color(SB_COLOR.z),
          ],
        },
      };

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer.setSize(window.innerWidth, window.innerHeight);
      const clock = new THREE.Clock();

      const tick = () => {
        window.requestAnimationFrame(() => {
          const elapsedTime = clock.getElapsedTime();
          material.uniforms.uTime.value = elapsedTime;
          renderer.render(scene, camera);
        });
      };
      // console.log(activeColor);
      tick();
      gsap.to("#main-box", {
        scrollTrigger: {
          trigger: "#main-box",
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "bottom bottom", // when the bottom of the trigger hits the bottom of the viewport
          onUpdate: (self) => {
            const progress = self.progress.toFixed(3); // Get the progress of the scroll
            material.uniforms.uScrollPos.value = progress;
            tick();
          },
          scrub: true,
          markers: false, // This will show markers on the page for debugging
        },
      });

      // gsap.to("#projects", {
      //   scrollTrigger: {
      //     trigger: "#projects",
      //     pin: "#project-images",
      //     start: "top top",
      //     end: "bottom bottom",
      //     onUpdate: (self) => {
      //       // const progress = self.progress.toFixed(3); // Get the progress of the scroll
      //       if (self.progress < 1 / 6) {
      //         const { x, y, z } = interpolateColors(0, 1, self.progress);
      //         console.log(x, y, z);
      //         material.uniforms.uColor.value = [
      //           new THREE.Color(x),
      //           new THREE.Color(y),
      //           new THREE.Color(z),
      //         ];
      //       } else if (self.progress < 2 / 6 && self.progress > 1 / 6) {
      //         const { x, y, z } = interpolateColors(1, 2, self.progress);
      //         material.uniforms.uColor.value = [
      //           new THREE.Color(x),
      //           new THREE.Color(y),
      //           new THREE.Color(z),
      //         ];
      //       } else if (self.progress < 3 / 6 && self.progress > 2 / 6) {
      //         const { x, y, z } = interpolateColors(2, 3, self.progress);
      //         material.uniforms.uColor.value = [
      //           new THREE.Color(x),
      //           new THREE.Color(y),
      //           new THREE.Color(z),
      //         ];
      //       } else if (self.progress < 4 / 6 && self.progress > 3 / 6) {
      //         const { x, y, z } = interpolateColors(3, 4, self.progress);
      //         material.uniforms.uColor.value = [
      //           new THREE.Color(x),
      //           new THREE.Color(y),
      //           new THREE.Color(z),
      //         ];
      //       } else if (self.progress < 5 / 6 && self.progress > 4 / 6) {
      //         const { x, y, z } = interpolateColors(4, 5, self.progress);
      //         material.uniforms.uColor.value = [
      //           new THREE.Color(x),
      //           new THREE.Color(y),
      //           new THREE.Color(z),
      //         ];
      //       }
      //       // TODO: FIGURE OUT WHY THIS HAPPENS, ALL SCROLLS TRIGGER AT THE SAME TIME. ALSO, SCROLL 6+1 IS UNDEFINED...
      //     },
      //   },
      // });
      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        const width = window.innerWidth;
        const height = window.innerHeight;

        const aspect = width / height;
        camera.left = -aspect;
        camera.right = aspect;
        camera.top = 1;
        camera.bottom = -1;
        camera.updateProjectionMatrix();
        camera.updateProjectionMatrix();

        mesh.geometry.dispose(); // Dispose old geometry
        mesh.geometry = new THREE.PlaneGeometry(2 * aspect, 2, 32, 32); // Create new geometry

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        tick();
      });
    }
  }, []);
  return (
    <div className="sticky top-0 z-0 hidden md:flex w-screen h-0 bg-transparent  ">
      <canvas style={{ width: "100%", height: "100%" }} ref={canvasRef}></canvas>
    </div>
  );
};

export default BackgroundCanvas;

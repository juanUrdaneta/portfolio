import React from "react";
import * as THREE from "three";
import vertexShader from "./shaders/test/vertex.glsl";
import fragmentShader from "./shaders/test/fragment.glsl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BackgroundCanvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  useGSAP(() => {
    if (canvasRef.current) {
      console.log("running");
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

      const render = () => {
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        material.uniforms.uTime.value = elapsedTime;
        render();
      };

      tick();
      gsap.to("#main-box", {
        scrollTrigger: {
          trigger: "#main-box",
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "bottom bottom", // when the bottom of the trigger hits the bottom of the viewport
          onUpdate: (self) => {
            const progress = self.progress.toFixed(3); // Get the progress of the scroll
            console.log(progress); // Log or use the scroll progress
            material.uniforms.uScrollPos.value = progress;
            render();
          },
          scrub: true,
          markers: false, // This will show markers on the page for debugging
        },
      });
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
      });
    }
  }, []);
  return (
    <div className="sticky top-0 z-[5] w-screen h-full min-h-[500px] border-0 border-t-white">
      <canvas style={{ width: "100%", height: "100" }} ref={canvasRef}></canvas>
    </div>
  );
};

export default BackgroundCanvas;

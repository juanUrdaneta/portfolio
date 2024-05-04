import React from "react";
import * as THREE from "three";
import vertexShader from "./shaders/test/vertex.glsl";
import fragmentShader from "./shaders/test/fragment.glsl";

const BackgroundCanvas = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  React.useEffect(() => {
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
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      renderer.setSize(window.innerWidth, window.innerHeight);

      const tick = () => {
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      tick();
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
    <div className="w-screen h-full min-h-[500px] border-0 border-t-white">
      <canvas style={{ width: "100%", height: "100" }} ref={canvasRef}></canvas>
    </div>
  );
};

export default BackgroundCanvas;

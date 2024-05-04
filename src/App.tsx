import { useGSAP } from "@gsap/react";
import "./App.css";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Techstack from "./sections/Techstack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function App() {
  React.useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  useGSAP(() => {
    gsap.to("#box-effect", {
      bottom: "100vh",
      ease: "expo.inOut",
      duration: 1.5,
      delay: 0.5,
      onComplete: () => {
        gsap.to("#box-effect", {
          opacity: 0,
          visibility: "hidden",
        });
      },
    });
    gsap.fromTo(
      "#description-box",
      { x: "25%", opacity: 0 },
      {
        opacity: 1,
        x: "0%",
        delay: 0.8,
        duration: 1,
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      "#name-box",
      { x: "-25%", opacity: 0 },
      {
        opacity: 1,
        x: "0%",
        delay: 0.8,
        duration: 1,
        ease: "power2.in",
      }
    );
  }, []);

  return (
    <>
      <main className="relative">
        <Navbar />
        <div
          id="box-effect"
          className="fixed bottom-0 w-screen h-screen bg-black-soft z-[20]"
        ></div>
        <Header />
        <Projects />
        <Techstack />
        <Resume />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

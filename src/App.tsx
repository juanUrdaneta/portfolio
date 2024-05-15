import { useGSAP } from "@gsap/react";
import "./App.css";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Lenis from "lenis";
import BackgroundCanvas from "./three/BackgroundCanvas";
import { ColorContext, FragmentShaderColorType } from "./context/colors";
import { SB_COLOR } from "./three/colors";
import AboutMe from "./sections/AboutMe";
import Navbar from "./sections/Navbar";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [color, setColor] = React.useState<FragmentShaderColorType>(SB_COLOR);

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
      ease: "power4.inOut",
      duration: 2.5,
      delay: 0.5,
      onComplete: () => {
        gsap.to("#box-effect", {
          opacity: 0,
          visibility: "hidden",
        });
      },
    });
    gsap.fromTo(
      "#name-box",
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.6,
        duration: 2,
        ease: "sine.out",
      }
    );
  }, []);

  return (
    <>
      <ColorContext.Provider value={{ activeColor: color, setColor: setColor }}>
        <main id="main-box" className="relative">
          <Navbar />
          <BackgroundCanvas />
          <Header />
          <AboutMe />
          <Projects />
          <div className=" relative w-full h-72 backdrop-invert bg-[#949596]/20"></div>
          <Resume />
        </main>
      </ColorContext.Provider>
    </>
  );
}

export default App;

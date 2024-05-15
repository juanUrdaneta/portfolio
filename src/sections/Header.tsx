import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = () => {
  useGSAP(() => {
    // recurrent
    gsap.to("#header-content", {
      y: "80vh",
      opacity: 0.4,
      scale: 0.9,
      ease: "linear",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        scrub: true,
      },
    });
    // gsap.to("#scroll-down-indicator", {
    //   y: "100vh",
    //   ease: "linear",
    //   scrollTrigger: {
    //     trigger: "#header",
    //     start: "top top",
    //     scrub: true,
    //   },
    // });
    // gsap.to("#scroll-down-indicator", {
    //   opacity: 1,
    //   ease: "sine.out",
    //   delay: 3,
    // });
  }, []);

  return (
    <div
      id="header"
      className="relative w-screen h-screen  flex flex-col justify-start overflow-hidden z-10  bg-black-soft"
    >
      <div id="header-content" className="w-full h-full flex justify-center items-center flex-col">
        <section className="w-full flex flex-col md:flex-row justify-center md:items-center ">
          <div className="w-full" id="name-box">
            {/* <h1 className=" text-left md:text-center font-archivo font-thin md:text-4xl lg:text-[120px] text-2xl select-none text-white-bone mb-6 ">
            Juan Urdaneta
          </h1> */}
            <p className="text-white-bone text-xl md:text-center md:text-lg font-inter font-thin select-none mt-56 ">
              Software Engineer and creative developer
            </p>
          </div>
        </section>
        <div className="w-full max-w-[1600px] ">
          <h2 className="text-white-bone  font-interText font-bold  mb-4 text-md uppercase">
            My recent Projects
          </h2>
        </div>
        <section
          id="cta"
          className="flex flex-grow w-full max-w-[1600px] justify-center pb-2 gap-5"
        >
          <ProjectCTA name="Shortbread AI" pic="shortbread.jpeg" />
          <ProjectCTA name="Climatika" pic="climatika.png" />
          <ProjectCTA name="Dvinum" pic="dvinum.jpeg" />
        </section>
        <div className="flex justify-center items-start h-16 ">
          <a href="mailto:urdntjuan@gmail.com">
            <button className="w-64 h-12 text-black-soft transition-all duration-500 rounded-xl bg-white-bone hover:bg-white-bone/80 ">
              Let's work together!
            </button>
          </a>
        </div>
      </div>
      {/* <div
        id="scroll-down-indicator"
        className="absolute bottom-10 self-center hidden md:flex opacity-0"
      >
        <img
          src={"scrolldown.svg"}
          alt="sroll down indicator"
          className="w-[50px] h-auto invert animate-bounce "
        />
      </div> */}
    </div>
  );
};

export default Header;

const ProjectCTA = ({ name, pic }: { name: string; pic: string }) => {
  const [hasMouseEntered, setMouseEntered] = React.useState(false);
  return (
    <div className=" relative h-full w-full flex flex-col">
      <div
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
        className="relative  h-full max-w-full rounded-lg  overflow-hidden "
      >
        <img
          src={pic}
          alt={name}
          className={`w-full h-full object-cover ${
            hasMouseEntered ? "grayscale-0 scale-105" : "grayscale-0 "
          } transition-all duration-300`}
        />
        {/* <div
        className={`absolute ${
          hasMouseEntered ? "bottom-0" : "-bottom-32"
        } h-32 w-full flex justify-end items-end transition-all duration-300`}
      >
        <p className="font-archivo text-6xl text-black-soft">{name}</p>
      </div> */}
      </div>
      <p className="text-white-bone w-full h-22 font-inter   font-semibold uppercase text-center py-4">
        {name}
      </p>
    </div>
  );
};

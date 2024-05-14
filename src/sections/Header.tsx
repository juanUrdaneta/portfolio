import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import React from "react";

const Header = () => {
  useGSAP(() => {
    // recurrent
    gsap.to("#header-content", {
      y: "100vh",
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
      <div id="header-content" className="w-full h-full flex flex-col">
        <section className=" w-full flex flex-col md:flex-row justify-center md:items-center ">
          <div className=" w-full  " id="name-box">
            {/* <h1 className=" text-left md:text-center font-archivo font-thin md:text-4xl lg:text-[120px] text-2xl select-none text-white-bone mb-6 ">
            Juan Urdaneta
          </h1> */}
            <p className="text-white-bone text-xl md:text-center md:text-4xl font-archivo font-thin select-none mt-56 ">
              Software Engineer
            </p>
          </div>
        </section>
        <div>
          <h2 className="text-white-bone font-archivo ml-10 mb-4 text-xl">My Projects</h2>
        </div>
        <section id="cta" className="flex flex-grow px-10 pb-10 gap-5">
          <ProjectCTA name="Shortbread AI" pic="shortbread.jpeg" />
          <ProjectCTA name="Climatika" pic="climatika.png" />
          <ProjectCTA name="Dvinum" pic="dvinum.jpeg" />
        </section>
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
    <div
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      className="relative w-full h-full max-w-full rounded-lg  overflow-hidden "
    >
      <img
        src={pic}
        alt={name}
        className={`w-full h-full object-cover ${
          hasMouseEntered ? "grayscale-0 scale-105" : "grayscale "
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
  );
};

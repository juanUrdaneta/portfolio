import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = ({ scrollTo }: { scrollTo: (selector: string) => void }) => {
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
      className="relative w-screen h-screen max-h-[1600px] flex flex-col justify-start overflow-hidden z-10  bg-black-soft max-[1600px]:px-8"
    >
      <div id="header-content" className="w-full h-full flex justify-center items-center flex-col">
        <section className="w-full flex flex-col md:flex-row justify-center md:items-center ">
          <div className="w-full" id="name-box">
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
          <ProjectCTA
            onClick={() => scrollTo("#shortbread-selector")}
            name="Shortbread AI"
            pic="shortbread.jpeg"
          />
          <ProjectCTA
            onClick={() => scrollTo("#climatika-selector")}
            name="Climatika"
            pic="climatika.png"
            cn="hidden min-[800px]:flex"
          />
          <ProjectCTA
            onClick={() => scrollTo("#dvinum-selector")}
            name="Dvinum"
            pic="dvinum.jpeg"
            cn="hidden min-[1000px]:flex"
          />
        </section>
        <div className="flex justify-center items-start h-16 ">
          <a href="mailto:urdntjuan@gmail.com">
            <button className="w-64 h-12 text-black-soft transition-all duration-500 rounded-xl bg-white-bone hover:bg-white-bone/80 ">
              Let's work together!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

const ProjectCTA = ({
  name,
  pic,
  cn,
  onClick,
}: {
  name: string;
  pic: string;
  onClick: () => void;
  cn?: string;
}) => {
  const [hasMouseEntered, setMouseEntered] = React.useState(false);
  return (
    <div onClick={onClick} className={`relative h-full w-full flex flex-col ${cn}`}>
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
      </div>
      <p className="text-white-bone w-full h-22 font-inter   font-semibold uppercase text-center py-4">
        {name}
      </p>
    </div>
  );
};

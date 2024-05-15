import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#header-nav-name",
      { y: "7rem" },
      {
        y: 0,
        fontSize: "2rem",
        scrollTrigger: {
          trigger: "#header",
          start: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.9) {
              gsap.to("#header-career", {
                color: "#141516",
              });
              gsap.to("#header-email", {
                color: "#141516",
              });
              gsap.to("#header-nav-name", {
                color: "#141516",
              });
              gsap.to("#navbar", {
                backgroundColor: "rgba(249,246,238,0.6)",
              });
            } else {
              gsap.to("#header-career", {
                color: "#f9f6ee",
              });
              gsap.to("#header-email", {
                color: "#f9f6ee",
              });
              gsap.to("#header-nav-name", {
                color: "#f9f6ee",
              });
              gsap.to("#navbar", {
                backgroundColor: "#141516",
              });
            }
          },
        },
      }
    );
  }, []);
  return (
    <div
      id="navbar"
      // style={{ backgroundColor: "#141516" }}
      className="w-screen h-20 fixed top-0 z-50 mt-[-1px] flex justify-center backdrop-blur-md max-[1600px]:px-8 "
    >
      <nav className="relative flex flex-row-reverse justify-between items-center w-[1600px] max-w-screen">
        <p id="header-email" className="font-interText text-white-bone hidden md:flex ">
          <a className="decoration" href="mailto:urdntjuan@gmail.com">
            urdntjuan@gmail.com
          </a>
        </p>
        <p
          id="header-nav-name"
          className="absolute w-full font-interText font-extrabold max-[600px]:text-5xl max-[930px]:text-7xl max-[1210px]:text-8xl text-9xl tracking-wide uppercase select-none text-white-bone text-left md:text-center "
        >
          Juan Urdaneta
        </p>
        <p
          id="header-career"
          className="uppercase font-interText text-white-bone hidden min-[1100px]:flex"
        >
          Software engineer / Creative Developer
        </p>
      </nav>
    </div>
  );
};

export default Navbar;

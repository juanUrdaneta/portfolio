import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    // recurrent
    gsap.to("#name-box", {
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
    gsap.to("#scroll-down-indicator", {
      y: "100vh",
      ease: "linear",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to("#scroll-down-indicator", {
      opacity: 1,
      ease: "sine.out",
      delay: 3,
    });
  }, []);

  return (
    <div
      id="header"
      className="relative w-screen h-screen  flex flex-col justify-center overflow-hidden z-10  bg-black-soft"
    >
      <section className=" w-full flex flex-col md:flex-row justify-center md:items-center mb-10 ">
        <div className=" w-full  " id="name-box">
          <h1 className=" text-left md:text-center font-archivo font-thin md:text-4xl lg:text-[120px] text-2xl select-none text-white-bone mb-6 ">
            Juan Urdaneta
          </h1>
          <p className="text-white-bone text-xl md:text-center md:text-4xl font-archivo font-thin select-none ">
            Software Engineer
          </p>
        </div>
      </section>
      <div
        id="scroll-down-indicator"
        className="absolute bottom-10 self-center hidden md:flex opacity-0"
      >
        <img
          src={"scrolldown.svg"}
          alt="sroll down indicator"
          className="w-[50px] h-auto invert animate-bounce "
        />
      </div>
    </div>
  );
};

export default Header;

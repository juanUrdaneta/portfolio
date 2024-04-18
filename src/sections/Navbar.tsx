import React from "react";
import gsap from "gsap";

const Navbar = () => {
  React.useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { opacity: 0 },
      {
        opacity: 1,

        scrollTrigger: {
          trigger: "#name-box",
          start: "top top",
          scrub: true,
        },
      }
    );
  }, []);
  React.useEffect(() => {
    gsap.to("#navbar", {
      backgroundColor: "#aa00aa",
      scrollTrigger: {
        trigger: "#resume",
        start: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      id="navbar"
      // style={{ backgroundColor: "#141516" }}
      className="w-screen h-24 sticky top-0 z-50 mt-[-1px] flex justify-center backdrop-brightness-50 border-b border-b-black-soft "
    >
      <nav className="flex justify-between items-center w-[1200px] max-w-[1200px]">
        <p className="text-white-bone text-3xl font-general font-light">Juan Urdaneta</p>
        <ul className="flex justify-between text-white-bone w-[160px] ">
          <li className="">
            <a href="#projects" className="text-white-bone font-general font-light">
              Projects
            </a>
          </li>
          <li className="">
            <a href="#resume" className="text-white-bone font-general font-light">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

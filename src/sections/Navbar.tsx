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
  return (
    <div
      id="navbar"
      className="w-screen h-16 sticky top-0 z-10 mt-[-1px] bg-black-soft flex justify-center "
    >
      <nav className="flex justify-between items-center w-[1200px] max-w-[1200px]">
        <p className="text-white-bone">Juan Urdaneta</p>
        <ul className="flex justify-between text-white-bone w-[160px] ">
          <li>
            <a href="#projects"></a>Projects
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

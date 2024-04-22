import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [mobileNavto, setMobileNavTo] = React.useState<"Contact" | "Projects">("Contact");
  useGSAP(() => {
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
    gsap.to("#navbar", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top center",
        onEnter: () => {
          setMobileNavTo("Contact");
        },
      },
    });
    gsap.to("#navbar", {
      scrollTrigger: {
        trigger: "#resume",
        start: "top center",
        onEnter: () => {
          setMobileNavTo("Projects");
        },
      },
    });
  }, []);
  return (
    <div
      id="navbar"
      // style={{ backgroundColor: "#141516" }}
      className="w-screen h-24 sticky top-0 z-50 mt-[-1px] flex justify-center backdrop-brightness-50 bg-white-bone border-b border-b-black-soft "
    >
      <nav className="flex justify-between items-center w-[1200px] max-w-screen">
        <p className="text-black-soft text-xl md:text-3xl font-general font-light ml-4">
          Juan Urdaneta
        </p>
        <div className="flex md:hidden justify-center items-center ">
          <a
            href={`#${mobileNavto === "Contact" ? "resume" : "projects"}`}
            className="text-black-soft font-general font-light underline underline-offset-4 mr-4"
            onClick={() => {
              if (mobileNavto === "Projects") {
                setTimeout(() => {
                  setMobileNavTo("Contact");
                }, 1);
              }
            }}
          >
            {mobileNavto === "Contact" ? "Contact" : "Projects"}
          </a>
        </div>
        <ul className="justify-between text-black-soft w-[160px] hidden md:flex pr-4 ">
          <li className="">
            <a href="#projects" className="text-black-soft font-general font-light">
              Projects
            </a>
          </li>
          <li className="">
            <a href="#resume" className="text-black-soft font-general font-light">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

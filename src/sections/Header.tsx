import gsap from "gsap";
import React from "react";

const Header = () => {
  React.useEffect(() => {
    gsap.to("#name-box", {
      scale: 0.95,
      opacity: 0,
      scrollTrigger: {
        trigger: "#name-box",
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-screen h-[800px] flex flex-col justify-end bg-black-soft ">
      <section id="name-box" className=" w-full flex flex-col justify-end items-end">
        <h1 className="text-left md:text-center font-general font-thin text-6xl md:text-[200px] select-none text-white-bone font-regular px-8">
          Juan Urdaneta
        </h1>
        <div className=" h-fit p-2 flex justify-center items-center mt-12 rounded-2xl">
          <p className="font-chivo text-white-bone text-xl md:text-4xl font-bold select-none bg-transparent uppercase ">
            Software developer
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;

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
    <div
      className="w-screen h-[800px] flex flex-col justify-center items-center "
      style={{ background: "linear-gradient(180deg, #404040, #141516)" }}
    >
      <section
        id="name-box"
        className=" w-full max-w-[1200px] flex flex-col justify-center items-center"
      >
        <h1 className="text-left md:text-center font-chivo uppercase text-6xl md:text-8xl select-none text-emerald-400 font-regular px-8">
          Juan Urdaneta
        </h1>
        <div className=" h-fit p-2 flex justify-center items-center mt-12 rounded-2xl">
          <p className="font-chivo text-emerald-400 text-xl md:text-4xl font-bold select-none bg-transparent uppercase ">
            Software developer
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;

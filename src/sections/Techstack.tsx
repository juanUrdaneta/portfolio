import React from "react";
import gsap from "gsap";

const Techstack = () => {
  React.useEffect(() => {
    gsap.to("#innerTechstack", {
      scale: 0.9,
      opacity: 0.6,
      scrollTrigger: {
        trigger: "#techstack",
        start: "top top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      id="techstack"
      className="w-screen flex justify-center items-center bg-[#fdfdfd] sticky top-0 z-20 mt-[-1px]"
    >
      <section
        id="innerTechstack"
        className="w-full max-w-[1200px] my-2 flex justify-around p-4 flex-wrap"
      >
        <img src="/ts.svg" className="w-[100px] md:w-[180px]" />
        <img src="/nextjs.svg" className="w-[100px] md:w-[180px]" />
        <img src="/tailwindcss.svg" className="w-[100px] md:w-[180px]" />
        <img src="/firebase.svg" className="w-[100px] md:w-[180px]" />
        <img src="/aws.svg" className="w-[100px] md:w-[180px]" />
      </section>
    </div>
  );
};

export default Techstack;

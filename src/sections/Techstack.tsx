import React from "react";
import gsap from "gsap";

const Techstack = () => {
  React.useEffect(() => {
    gsap.to("#innerTechstack", {
      // scale: 0.9,
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
      className="w-screen flex justify-center items-center bg-white-bone sticky top-24 z-20 mt-[-1px]"
    >
      <section
        id="innerTechstack"
        className="w-full max-w-[1200px] my-2 flex justify-between py-4 flex-wrap"
      >
        <img src="/ts.svg" className="w-[100px] md:w-[150px]" />
        <img src="/nextjs.svg" className="w-[100px] md:w-[150px]" />
        <img src="/tailwindcss.svg" className="w-[100px] md:w-[150px]" />
        <img src="/firebase.svg" className="w-[100px] md:w-[150px]" />
        <img src="/aws.svg" className="w-[100px] md:w-[150px]" />
      </section>
    </div>
  );
};

export default Techstack;

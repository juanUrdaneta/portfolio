import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Techstack = () => {
  useGSAP(() => {
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
      className="w-screen flex justify-center items-center bg-black-soft sticky top-24 z-20 mt-[-1px] border-t border-t-black-soft "
    >
      <section
        id="innerTechstack"
        className="w-full max-w-[1200px] my-2 flex justify-around md:justify-between py-4 flex-wrap"
      >
        <img src="/ts.svg" className="w-[100px] md:w-[150px] invert grayscale" />
        <img src="/nextjs.svg" className="w-[100px] md:w-[150px] grayscale invert" />
        <img src="/tailwindcss.svg" className="w-[100px] md:w-[150px] grayscale invert" />
        <img src="/firebase.svg" className="w-[100px] md:w-[150px] grayscale" />
        <img src="/aws.svg" className="w-[100px] md:w-[150px] grayscale invert" />
      </section>
    </div>
  );
};

export default Techstack;

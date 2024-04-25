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
      className="w-screen flex flex-col justify-center items-center bg-black-soft sticky top-24 z-20 mt-[-1px] border-t border-t-black-soft "
    >
      <section
        id="innerTechstack"
        className="w-full max-w-[1200px] my-2 flex justify-around md:justify-between py-4 flex-wrap"
      >
        <img src="ts.svg" className="w-[100px] md:w-[150px] invert grayscale" />
        <img src="nextjs.svg" className="w-[100px] md:w-[150px] grayscale invert" />
        <img src="tailwindcss.svg" className="w-[100px] md:w-[150px] grayscale invert" />
        <img src="firebase.svg" className="w-[100px] md:w-[150px] grayscale" />
        <img src="aws.svg" className="w-[100px] md:w-[150px] grayscale invert" />
      </section>
      <div className="w-full h-full flex items-center justify-center mb-4">
        <a
          href="mailto:urdntjuan@gmail.com"
          className="flex items-end text-white-bone text-thin font-openSans "
        >
          <p className="text-lg  mr-2 ">Contact me:</p>
          <p>urdntjuan@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Techstack;

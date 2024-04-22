import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
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
    <div className="w-screen h-[800px] max-h-[80vh] flex flex-col justify-end bg-black-soft ">
      <section id="name-box" className=" w-full flex flex-col justify-center items-center">
        <h1 className="text-left md:text-center font-general font-thin text-6xl md:text-[200px] select-none text-white-bone px-8">
          Juan Urdaneta
        </h1>
        <div className=" h-fit p-2 flex justify-center items-center mt-12 rounded-2xl">
          <p className=" text-white-bone text-xl md:text-4xl font-general font-thin select-none bg-transparent ">
            Software Developer
          </p>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default Header;

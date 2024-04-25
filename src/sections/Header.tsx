import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    gsap.to("#name-box", {
      opacity: 0,
      x: "-50%",
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to("#description-box", {
      opacity: 0,
      x: "50%",
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      id="header"
      className="w-screen h-[800px] max-h-[80vh] flex flex-col justify-end bg-black-soft "
    >
      <section className=" w-full flex flex-col md:flex-row justify-center items-center mb-10">
        <div className="px-8 w-full md:w-1/2 bg-black-soft" id="name-box">
          <h1 className="text-left md:text-right font-openSans font-thin md:text-4xl lg:text-[80px] sm:text-[200px] select-none text-white-bone mb-4 ">
            Juan Urdaneta
          </h1>
          <p className=" text-white-bone text-xl md:text-right md:text-4xl font-openSans font-thin select-none ">
            Software Engineer
          </p>
        </div>
        <div
          id="description-box"
          className=" h-fit p-2 flex flex-col justify-center items-start mt-12 rounded-2xl w-1/2"
        >
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent mb-2 text-left ">
            As a seasoned Front-End Engineer, I am deeply committed to solving complex problems
          </p>
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent mb-2 text-left ">
            and transforming business ideas into tangible products.
          </p>
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent mb-2 text-left ">
            With a keen focus on collaboration, I excel in partnering with Product Managers
          </p>
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent mb-2 text-left ">
            and Graphic Designers to refine and iterate on solutions, ensuring that the user
            experience is optimized to its fullest potential.
          </p>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default Header;

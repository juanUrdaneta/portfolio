import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    // recurrent
    gsap.to("#name-box", {
      opacity: 0,
      x: "-50%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        scrub: true,
      },
    });
    gsap.to("#description-box", {
      opacity: 0,
      x: "50%",
      ease: "power4.out",
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
      className="w-screen h-[800px] max-h-[80vh] flex flex-col justify-end bg-black-soft overflow-hidden "
    >
      <section className=" w-full flex flex-col md:flex-row justify-center items-start md:items-center mb-10">
        <div className="px-8 w-full md:w-1/2 bg-black-soft" id="name-box">
          <h1 className="text-left md:text-right font-openSans font-thin md:text-4xl lg:text-[80px] text-2xl select-none text-white-bone mb-4 ">
            Juan Urdaneta
          </h1>
          <p className=" text-white-bone text-xl md:text-right md:text-4xl font-openSans font-thin select-none ">
            Software Engineer
          </p>
        </div>
        <div className="w-16"></div>
        <div
          id="description-box"
          className="h-fit flex flex-col justify-center items-start mt-12 w-3/4 md:w-1/2 px-8 md:px-0"
        >
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ">
            As a seasoned Front-End Engineer, I am deeply committed to solving complex problems
          </p>
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ">
            and transforming business ideas into tangible products.
          </p>
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ">
            With a keen focus on collaboration, I excel in partnering with Product Managers
          </p>
          <p className=" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ">
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

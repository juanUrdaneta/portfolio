import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    // recurrent
    gsap.to("#name-box", {
      y: "45vh",
      ease: "sine.out",
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        scrub: true,
      },
    });
    // gsap.to("#description-box", {
    //   x: "50%",
    //   ease: "power4.out",
    //   scrollTrigger: {
    //     trigger: "#header",
    //     start: "top top",
    //     scrub: true,
    //   },
    // });
    // gsap.to("#name-box", {
    //   opacity: 0,
    //   ease: "sine.out",
    //   scrollTrigger: {
    //     trigger: "#header",
    //     start: "top top",
    //     scrub: true,
    //   },
    // });
    // gsap.to("#description-box", {
    //   opacity: 0,
    //   ease: "sine.out",
    //   scrollTrigger: {
    //     trigger: "#header",
    //     start: "top top",
    //     scrub: true,
    //   },
    // });
  }, []);

  return (
    <div
      id="header"
      className="relative w-screen h-screen  flex flex-col justify-center overflow-hidden z-10  bg-black-soft"
    >
      <section className=" w-full flex flex-col md:flex-row justify-center md:items-center mb-10 ">
        <div className=" w-full  " id="name-box">
          <h1 className=" text-left md:text-center font-archivo font-thin md:text-4xl lg:text-[120px] text-2xl select-none text-white-bone mb-6 ">
            Juan Urdaneta
          </h1>
          <p className="text-white-bone text-xl md:text-center md:text-4xl font-archivo font-thin select-none ">
            Software Engineer
          </p>
        </div>
        {/* <div className="w-16"></div> */}
        {/* <div
          id="description-box"
          className="h-fit flex flex-col justify-center items-start mt-12 w-3/4 md:w-1/2 px-8 md:px-0 "
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
        </div> */}
      </section>
      <div></div>
    </div>
  );
};

export default Header;

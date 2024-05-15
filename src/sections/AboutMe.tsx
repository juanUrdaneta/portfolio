import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutMe = () => {
  useGSAP(() => {
    gsap.to("#about-me-one", {
      opacity: 1,
      ease: "sine.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: "#name-box",
        start: "top top",
        // scrub: true,
      },
    });
    gsap.to("#about-me-two", {
      opacity: 1,
      ease: "sine.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: "#name-box",
        start: "top top",
        // scrub: true,
      },
    });
    gsap.to("#about-me-one", {
      y: 0,
      ease: "power4.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: "#name-box",
        start: "top top",
        // scrub: true,
      },
    });
    gsap.to("#about-me-two", {
      y: 0,
      ease: "power4.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: "#name-box",
        start: "top top",
        // scrub: true,
      },
    });
  }, []);
  return (
    <div className=" relative h-[90vh] w-screen flex">
      <div className="w-full flex">
        <div
          id="about-me-one"
          className="w-full h-full flex justify-center translate-y-[25vh] opacity-0  "
        >
          <div className="w-7/12 h-full flex flex-col justify-center items-center px-12 ">
            <h3 className="text-5xl font-archivo mb-10">Hi there!</h3>
            <p className="text-4xl text-center font-inter font-thin mb-16">
              <span className="font-bold">Pixel perfect</span> software engineer based in Buenos
              Aires.
            </p>
            <p className="text-4xl text-center font-inter font-thin mb-16">
              Experienced in React, Next.js, AWS and a bunch of cool tech.
            </p>
            <p className="text-4xl text-center font-inter font-thin mb-16">
              Passionate about turning great ideas into great products.
            </p>
            <p className="text-4xl text-center font-inter font-thin mb-16">
              Problem-solving oriented, naturally curious, continually growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
/* <p className="text-lg text-justify font-openSans mb-6">
During my journey as a web developer, I have worked on various products from the
drawing board stage to full production. By collaborating with both product owners and
graphic designers, I’ve gained knowledge that allows me to approach technical
solutions from a comprehensive perspective.
</p> */

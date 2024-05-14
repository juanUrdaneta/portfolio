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
    <div className=" relative h-screen w-screen flex">
      <div
        id="about-me-title"
        className="w-1/4 h-screen flex flex-col justify-center items-end relative "
      >
        <h1 className="font-archivo text-right text-6xl select-none">{`About`}</h1>
        <h1 className="font-archivo text-right text-6xl select-none">{`Me`}</h1>
      </div>
      <div className="w-full flex">
        <div id="about-me-one" className="w-1/2 min-h-screen  translate-y-[25vh] opacity-0  ">
          <div className="w-full h-full flex flex-col justify-center items-left px-12 ">
            <h3 className="text-4xl font-archivo mb-4">Hi there!</h3>
            <p className="text-lg text-justify font-openSans mb-6">
              I’m a software engineer based in Buenos Aires.
            </p>
            <p className="text-lg text-justify font-openSans mb-6">
              During my journey as a web developer, I have worked on various products from the
              drawing board stage to full production. By collaborating with both product owners and
              graphic designers, I’ve gained knowledge that allows me to approach technical
              solutions from a comprehensive perspective.
            </p>
            <p className="text-lg text-justify font-openSans mb-2">
              Experienced in TypeScript, React, Next.js, AWS, Node.js, and Three.js.
            </p>
            <p className="text-lg text-justify font-openSans mb-2">
              Passionate about turning great ideas into great products.
            </p>
            <p className="text-lg text-justify font-openSans mb-2">
              Problem-solving oriented, naturally curious, continually growing.
            </p>
          </div>
        </div>
        <div id="about-me-two" className="w-1/2 h-screen   translate-y-[50vh] opacity-0 ">
          <div className="w-full h-full flex justify-center items-center">
            <h3>Title 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

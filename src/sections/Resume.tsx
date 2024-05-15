import React from "react";

const Resume = () => {
  const picRef = React.useRef<HTMLDivElement>(null);

  // useGSAP(() => {
  //   if (picRef.current) {
  //     const { width: imgWidth, height: imgHeight } = picRef.current.getBoundingClientRect();
  //     picRef.current.addEventListener("mousemove", (e) => {
  //       const topAtt = picRef.current?.attributes.getNamedItem("top")?.value;
  //       const leftAtt = picRef.current?.attributes.getNamedItem("left")?.value;
  //       const isLeft = e.offsetX < imgWidth / 2;
  //       const isTop = e.offsetY < imgHeight / 2;
  //       if (!leftAtt) {
  //         picRef.current?.setAttribute("left", isLeft ? "1" : "0");
  //       }
  //       if (!topAtt) {
  //         picRef.current?.setAttribute("top", isTop ? "1" : "0");
  //       }
  //       if (isLeft && leftAtt === "0") {
  //         console.log("calling left");
  //         picRef.current?.setAttribute("left", "1");
  //         gsap.to("#cat-pic", {
  //           x: 10,
  //           duration: 0.1,
  //           ease: "bounce.out",
  //         });
  //       } else if (!isLeft && leftAtt === "1") {
  //         console.log("calling right");
  //         picRef.current?.setAttribute("left", "0");
  //         gsap.to("#cat-pic", {
  //           x: -10,
  //           duration: 0.2,
  //           ease: "bounce.out",
  //         });
  //       }
  //       if (isTop && topAtt === "0") {
  //         console.log("calling top");
  //         picRef.current?.setAttribute("top", "1");
  //         gsap.to("#cat-pic", {
  //           y: 10,
  //           duration: 0.1,
  //           ease: "bounce.out",
  //         });
  //       } else if (!isTop && topAtt === "1") {
  //         console.log("calling bottom");
  //         picRef.current?.setAttribute("top", "0");
  //         gsap.to("#cat-pic", {
  //           y: -10,
  //           duration: 0.1,
  //           ease: "bounce.out",
  //         });
  //       }
  //     });
  //     picRef.current.addEventListener("mouseleave", () => {
  //       gsap.to("#cat-pic", {
  //         x: 0,
  //         duration: 0.1,
  //         ease: "power4.out",
  //       });
  //     });
  //   }
  // }, []);

  return (
    <div id="resume" className="relative w-screen z-30 flex justify-center ">
      <div className="w-4/6 max-w-[1600px] flex flex-col h-full ">
        <div className="w-full z-10 h-[800px] flex flex-col md:flex-row items-center mb-24 ">
          <p className="w-full md:w-1/2 py-8 md:py-0 text-md md:text-2xl leading-2 md:leading-10 text-left font-inter font-light">
            During my journey as a web developer, I have worked on various products from the drawing
            board stage to full production. By collaborating with both product owners and graphic
            designers, I’ve gained knowledge that allows me to approach technical solutions from a
            comprehensive perspective.
          </p>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div
              ref={picRef}
              id="cat-pic"
              className="rounded-md overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img src="mulata.jpg" className="w-[320px] h-[560px] object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row justify-start items-center gap-12 mb-24 ">
          <h2 className="font-inter font-semibold text-8xl  mb-12 text-left select-none uppercase">
            Let's get <br />
            <span className="pl-20">Talking!</span>
          </h2>
          <div className="w-full lg:w-1/2 flex flex-col ">
            <p className="text-xl text-left font-inter font-light mb-12">
              Want to work together or looking for an engenieer to join the team? Let’s talk.
            </p>
            <div className="flex justify-center lg:justify-start items-start h-16">
              <a href="mailto:urdntjuan@gmail.com">
                <button className="w-56 h-12 text-white-bone transition-all duration-500 rounded-xl bg-black-soft hover:bg-black-soft/80 ">
                  Let's work together!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

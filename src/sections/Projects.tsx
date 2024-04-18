import React from "react";
import gsap from "gsap";

const Projects = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      gsap.to("#last-project", {
        scale: 0.9,
        opacity: 0.4,
        scrollTrigger: {
          trigger: "#last-project",
          start: "top top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <>
      <div
        id="projects"
        className="relative z-[5] flex min-h-screen w-screen flex-col items-center justify-center bg-black-soft "
      >
        <article className="my-2 w-full max-w-[1200px] pt-20 ">
          <div className="flex w-full h-full flex-col justify-center md:flex-row ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Shortbread.ai</p>
              <p className="text-white">comic editor</p>
            </div>
            <img src="shortbread.webp" className=" max-w-3/4 h-auto w-[600px]" />
          </div>
          <div className="mb-20"></div>
          <div className="flex w-full h-full flex-col justify-center md:flex-row-reverse ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Incept</p>
              <p className="text-white">Front End Landing page collab</p>
            </div>
            <img src="/incept.webp" width={600} height={600} className="max-w-3/4" />
          </div>
          <div className="mb-20"></div>
          <div className="flex w-full h-full flex-col justify-center md:flex-row ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Crowdsourced shopping list app</p>
              <p className="text-white">Features for mass updating and cataloging products</p>
            </div>
            <img src="shortbread.webp" className=" max-w-3/4 h-auto w-[600px]" />
          </div>
        </article>
      </div>
      <div
        className="sticky top-0 z-10 mt-[-1px] flex w-screen flex-col items-center justify-center bg-black-soft"
        ref={ref}
      >
        <article id="last-project" className="mb-2 mt-20 w-full max-w-[1200px] pb-20">
          <div className="flex w-full flex-col justify-center md:flex-row-reverse  ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Mesa Premium</p>
              <p className="text-white">Yet to release restaurant bookings app</p>
            </div>
            <img src="/incept.webp" width={600} height={600} className="max-w-3/4" />
          </div>
        </article>
      </div>
    </>
  );
};

export default Projects;

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
              <div className="p-6">
                <p className="text-white max-w-[500px] text-center">
                  Webtoon Editor, made from scratch with the
                </p>
                <p className="text-white max-w-[500px] text-center">Shortbread.AI team!</p>
              </div>
            </div>
            <img src="shortbread.webp" className=" max-w-3/4 h-auto w-[600px]" />
          </div>
          <div className="mb-20"></div>
          <div className="flex w-full h-full flex-col justify-center md:flex-row-reverse ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Incept Landing Page</p>
              <div className="p-6">
                <p className="text-white max-w-[500px] text-center">
                  Collaborated with the team at Offscreen Canvas
                </p>
              </div>
            </div>
            <img src="/incept.webp" width={600} height={600} className="max-w-3/4" />
          </div>
          <div className="mb-20"></div>
          <div className="flex w-full h-full flex-col justify-center md:flex-row ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">GrocerSave App</p>
              <div className="p-6">
                <p className="text-white max-w-[500px] text-center">
                  Yet to release shopping list apps that finds
                </p>
                <p className="text-white max-w-[500px] text-center">
                  the best prices of items for its users
                </p>
              </div>
            </div>
            <img src="shortbread.webp" className=" max-w-3/4 h-auto w-[600px]" />
          </div>
          <div className="mb-20"></div>
          <div className="flex w-full h-full flex-col justify-center md:flex-row-reverse ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Dvinum</p>
              <div className="p-6">
                <p className="text-white max-w-[500px] text-center">
                  Web app that provides restaurants to provide an online
                </p>
                <p className="text-white max-w-[500px] text-center">
                  food and wine menu for their customers with a QR Code
                </p>
              </div>
            </div>
            <img src="/incept.webp" width={600} height={600} className="max-w-3/4" />
          </div>
          <div className="mb-20"></div>
          <div className="flex w-full h-full flex-col justify-center md:flex-row ">
            <div className="flex w-1/2 flex-col items-center justify-center">
              <p className="text-white">Climatika App</p>
              <div className="p-6">
                <p className="text-white max-w-[500px] text-center">
                  Configurator app that allows users to edit the look and feel of their
                </p>
                <p className="text-white max-w-[500px] text-center">
                  self supporting pergola before sending their PO on a 3d environment
                </p>
              </div>
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
              <p className="text-white p-6">Yet to release restaurant management bookings app</p>
            </div>
            <img src="/incept.webp" width={600} height={600} className="max-w-3/4" />
          </div>
        </article>
      </div>
    </>
  );
};

export default Projects;

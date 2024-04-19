import React from "react";
import gsap from "gsap";

const Projects = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      gsap.to("#last-project", {
        // scale: 0.9,
        // opacity: 0.4,
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
        className="relative z-[5] flex min-h-screen w-screen flex-col items-center justify-center bg-white-bone "
      >
        <article className="mb-2 mt-8 w-full max-w-[1200px] pt-20 ">
          <Project
            name="Shortbread.ai Engine"
            text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to
            create and edit webcomics working closely with the product designer to create a
            scalable and robust architecture that will enable the product to grow without
            compromising core features. Worked on integrating backend APIs that generated /
            enhanced / edited images with AI generative models."
            imgSrc="shortbread.webp"
          />
          <Project
            name="GrocerSave App"
            text="Developed front end features for a crowd sourced grocery list React Native App. 
            Worked closely with the Product Manager to develop specific workflows that enabled potential 
            power users to perform mass data update operations with a focus on data integrity and ease of use.
            Developed backend features that enabled the automation for mass product updates and allowed out 
            backend interact with core aws services."
            imgSrc="incept.webp"
          />
          <Project
            name="Incept Landing Page"
            text="Developed a responsive pixel-perfect website, worked in tandem with a webgl developer to architect the component 
            structure to fit the needs for three.js to run and adjust properly to the end design."
            imgSrc="incept.webp"
          />
          <Project
            name="Climatika App"
            text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
            imgSrc="climatika.png"
          />
          <Project
            name="Dvinum"
            text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            imgSrc="shortbread.webp"
          />
        </article>
      </div>
      <div
        className="sticky top-24 z-10 mt-[-1px] flex w-screen flex-col items-center justify-center bg-white-bone"
        ref={ref}
      >
        <article id="last-project" className="mb-2 w-full max-w-[1200px] pb-20">
          <Project
            name="Mesa Premium"
            text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers. "
            imgSrc="incept.webp"
          />
        </article>
      </div>
    </>
  );
};

export default Projects;

const Project = (props: { name: string; text: string; imgSrc: string }) => {
  return (
    <>
      <div className="flex w-full h-full flex-col justify-center md:flex-row mt-20 ">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <p className="text-black-soft text-4xl italic">{props.name}</p>
          <div className="p-6">
            <p className="text-black-soft max-w-[500px] text-center italic text-sm">{props.text}</p>
          </div>
        </div>
        <img src={props.imgSrc} className=" max-w-3/4 h-auto w-[600px] grayscale" />
      </div>
    </>
  );
};

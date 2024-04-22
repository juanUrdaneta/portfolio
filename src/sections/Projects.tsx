import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const photos = gsap.utils.toArray(".desktop-image:not(:first-child)");
    const details = gsap.utils.toArray(".desktop-detail");
    gsap.set(photos, { yPercent: 150 });
    const allPhotos = gsap.utils.toArray(".desktop-image");

    details.forEach((_, index) => {
      console.log(photos[index]);
      const animation = gsap
        .timeline()
        .to(photos[index] as gsap.TweenTarget, { yPercent: 0 })
        .set(allPhotos[index] as gsap.TweenTarget, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: `.trigger-${index}`,
        start: "center 99%",
        end: "bottom 1%",
        animation: animation,
        scrub: true,
        markers: false,
      });
    });

    gsap.to("#projects", {
      scrollTrigger: {
        trigger: "#projects",
        pin: "#project-images",
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <>
      <div
        id="projects"
        className="relative z-[5] flex min-h-screen w-screen flex-col items-center justify-center bg-white-bone "
      >
        <div className="hidden md:flex w-full">
          <article className="w-1/2 justify-center ">
            <DesktopProject
              name="Shortbread.ai Engine"
              text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to
              create and edit webcomics working closely with the product designer to create a
              scalable and robust architecture that will enable the product to grow without
              compromising core features. Worked on integrating backend APIs that generated /
              enhanced / edited images with AI generative models."
            />
            <div className="trigger-0"></div>
            <DesktopProject
              name="GrocerSave App"
              text="Developed front end features for a crowd sourced grocery list React Native App. 
              Worked closely with the Product Manager to develop specific workflows that enabled potential 
              power users to perform mass data update operations with a focus on data integrity and ease of use.
              Developed backend features that enabled the automation for mass product updates and allowed out 
              backend interact with core aws services."
            />
            <div className="trigger-1"></div>
            <DesktopProject
              name="Incept Landing Page"
              text="Developed a responsive pixel-perfect website, worked in tandem with a webgl developer to architect the component 
              structure to fit the needs for three.js to run and adjust properly to the end design."
            />
            <div className="trigger-2"></div>
            <DesktopProject
              name="Climatika App"
              text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
            />
            <div className="trigger-3"></div>
            <DesktopProject
              name="Dvinum"
              text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            />
            <div className="trigger-4"></div>
            <DesktopProject
              name="Mesa Premium"
              text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers. "
            />
          </article>
          <div
            id="project-images"
            className="w-1/2 overflow-hidden h-screen flex justify-center items-center "
          >
            <div className="h-[400px] w-full max-w-[700px] relative rounded-lg overflow-hidden shadow-xl">
              <DesktopProjectImg img="shortbread.jpeg" />
              <DesktopProjectImg img="incept.webp" />
              <DesktopProjectImg img="incept.webp" />
              <DesktopProjectImg img="climatika.png" />
              <DesktopProjectImg img="shortbread.jpeg" />
              <DesktopProjectImg img="incept.webp" />
            </div>
          </div>
        </div>
        {/* mobile content */}
        <article className="mb-2 mt-8 w-full max-w-[1200px] pt-20 block md:hidden ">
          <Project
            name="Shortbread.ai Engine"
            text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to
            create and edit webcomics working closely with the product designer to create a
            scalable and robust architecture that will enable the product to grow without
            compromising core features. Worked on integrating backend APIs that generated /
            enhanced / edited images with AI generative models."
            imgSrc="shortbread.jpeg"
            order={1}
          />
          <Project
            name="GrocerSave App"
            text="Developed front end features for a crowd sourced grocery list React Native App. 
            Worked closely with the Product Manager to develop specific workflows that enabled potential 
            power users to perform mass data update operations with a focus on data integrity and ease of use.
            Developed backend features that enabled the automation for mass product updates and allowed out 
            backend interact with core aws services."
            imgSrc="incept.webp"
            order={2}
          />
          <Project
            name="Incept Landing Page"
            text="Developed a responsive pixel-perfect website, worked in tandem with a webgl developer to architect the component 
            structure to fit the needs for three.js to run and adjust properly to the end design."
            imgSrc="incept.webp"
            order={3}
          />
          <Project
            name="Climatika App"
            text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
            imgSrc="climatika.png"
            order={4}
          />
          <Project
            name="Dvinum"
            text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            imgSrc="shortbread.jpeg"
            order={5}
          />
        </article>
      </div>
      <div
        className="sticky top-24 z-10 mt-[-1px] flex w-screen flex-col items-center justify-center bg-white-bone md:hidden"
        ref={ref}
      >
        <article id="last-project" className="mb-2 w-full max-w-[1200px] pb-20 block ">
          <Project
            name="Mesa Premium"
            text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers. "
            imgSrc="incept.webp"
            order={6}
          />
        </article>
      </div>
      {/* end mobile content */}
    </>
  );
};

export default Projects;

const Project = (props: { name: string; text: string; imgSrc: string; order: number }) => {
  return (
    <div
      className={`flex w-full h-full flex-col justify-center md:flex-row mt-10 z-[${props.order}] `}
    >
      <div className="rounded overflow-hidden h-fit w-fit shadow-xl mx-4 mb-2 ">
        <img
          src={props.imgSrc}
          className=" max-w-3/4 h-auto w-[600px]  transition-all duration-300 "
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <p className="text-black-soft font-chivo text-2xl italic text-center ">{props.name}</p>
        <div className="p-6">
          <p className="text-black-soft max-w-[500px] text-center italic text-sm">{props.text}</p>
        </div>
      </div>
      <hr className="border-black-soft mx-4 opacity-20" />
    </div>
  );
};

const DesktopProject = (props: { name: string; text: string }) => {
  return (
    <div className="flex flex-col items-center justify-center  desktop-detail w-full h-[calc(100vh-6rem)] ">
      <p className="text-black-soft font-chivo text-2xl italic text-left name-trigger ">
        {props.name}
      </p>
      <div className="p-6">
        <p className="text-black-soft max-w-[500px] text-left italic text-md">{props.text}</p>
      </div>
    </div>
  );
};

const DesktopProjectImg = (props: { img: string }) => {
  return (
    <div className="flex flex-col items-center justify-center desktop-image absolute w-auto h-full top-0 left-0 ">
      <img src={props.img} alt="img" className="max-w-[900px] w-full " />
    </div>
  );
};

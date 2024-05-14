import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  useGSAP(() => {
    const photos = gsap.utils.toArray(".desktop-image:not(:first-child)");
    const photosObj = gsap.utils.toArray(".desktop-image-obj").slice(1);
    const details = gsap.utils.toArray(".desktop-detail");
    const allPhotos = gsap.utils.toArray(".desktop-image");
    gsap.set(photos, { yPercent: 100 });
    gsap.set(photosObj, { yPercent: -100 });

    details.forEach((_, index) => {
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
      });
    });
    details.forEach((_, index) => {
      const animation = gsap.timeline().to(photosObj[index] as gsap.TweenTarget, { yPercent: 0 });
      ScrollTrigger.create({
        trigger: `.trigger-${index}`,
        start: "center 99%",
        end: "bottom 1%",
        animation: animation,
        scrub: true,
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
        className="relative z-20 flex min-h-screen w-screen flex-col items-center justify-center bg-transparent "
      >
        <div className="w-full flex justify-start items-center max-w-[1600px] ">
          <h2 className="font-inter text-8xl mb-24 text-left select-none uppercase">
            Recent <br />
            <span className="pl-24">Projects</span>
          </h2>
        </div>
        <div className="hidden lg:flex w-full justify-center ">
          {/* <div className="w-full lg:flex"> */}
          <article className="w-full max-w-[1600px] ">
            <DesktopProjectB
              stack={["React", "Nextjs", "Tailwind"]}
              img="shortbread.jpeg"
              selectorId="shortbread"
              name="Shortbread.ai Engine"
              text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models."
            />
            <div className="trigger-0"></div>
            <DesktopProjectB
              stack={["React", "React Native", "AWS"]}
              name="GrocerSave App"
              left
              img="shortbread.jpeg"
              text="Developed front end features for a crowd sourced grocery list React Native App. Worked closely with the Product Manager to develop specific workflows that enabled potential power users to perform mass data update operations with a focus on data integrity and ease of use.
              Developed backend features that enabled the automation for mass product updates and allowed out backend interact with core aws services."
            />
            <div className="trigger-1"></div>
            <DesktopProjectB
              stack={["React", "Nextjs", "Tailwind"]}
              name="Incept Landing Page"
              img="incept.webp"
              text="Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design."
            />
            <div className="trigger-2"></div>
            <DesktopProjectB
              stack={["React", "Nextjs", "Firebase"]}
              name="Climatika App"
              left
              selectorId="climatika"
              img="climatika.png"
              text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
            />

            <div className="trigger-3"></div>
            <DesktopProjectB
              stack={["Angular", "Firebase"]}
              name="Dvinum"
              selectorId="dvinum"
              img="dvinum.jpeg"
              text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            />
            <div className="trigger-4"></div>
            <DesktopProjectB
              stack={["React", "React Native", "Firebase"]}
              name="Mesa Premium"
              left
              img="mesap.png"
              text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers."
            />
          </article>
        </div>
        {/* mobile content */}
        <article className="mb-2 mt-8 w-full max-w-[1200px] pt-20 block lg:hidden ">
          <Project
            name="Shortbread.ai Engine"
            text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models."
            imgSrc="shortbread.jpeg"
            order={1}
          />
          <Project
            name="GrocerSave App"
            text="Developed front end features for a crowd sourced grocery list React Native App. Worked closely with the Product Manager to develop specific workflows that enabled potential power users to perform mass data update operations with a focus on data integrity and ease of use.
            Developed backend features that enabled the automation for mass product updates and allowed out backend interact with core aws services."
            imgSrc="N/A"
            order={2}
            grocer
          />
          <Project
            name="Incept Landing Page"
            text="Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design."
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
            text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
            imgSrc="dvinum.jpeg"
            order={5}
          />
          <Project
            name="Mesa Premium"
            text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers."
            imgSrc="mesap.png"
            order={6}
          />
        </article>
      </div>
      {/* end mobile content */}
    </>
  );
};

export default Projects;

const Project = (props: {
  name: string;
  text: string;
  imgSrc: string;
  order: number;
  grocer?: boolean;
}) => {
  return (
    <div
      className={`flex w-full h-full flex-col justify-center items-center  mt-10 z-[${props.order}] `}
    >
      <div className="rounded overflow-hidden h-fit w-fit shadow-xl mx-4 mb-2 ">
        {props.grocer ? (
          <div className="bg-[#659952] w-[92vw] h-full flex justify-center items-center flex-col">
            <img src={"grocer.svg"} alt="img" className="w-[200px] h-auto" />
            <p className="text-black-soft font-archivo text-2xl text-left">Grocersave</p>
          </div>
        ) : (
          <img
            src={props.imgSrc}
            className=" max-w-3/4 h-auto w-[600px]  transition-all duration-300 "
          />
        )}
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <p className="text-black-soft font-openSans text-2xl italic text-center ">{props.name}</p>
        <div className="p-6">
          <p className="text-black-soft max-w-[500px] font-openSans text-center italic text-sm">
            {props.text}
          </p>
        </div>
      </div>
      <hr className="border-black-soft mx-4 opacity-20" />
    </div>
  );
};
type StackKeywords =
  | "Angular"
  | "Tailwind"
  | "React"
  | "Nextjs"
  | "AWS"
  | "Firebase"
  | "React Native";

const DesktopProjectB = (props: {
  name: string;
  text: string;
  img: string;
  selectorId?: string;
  stack: StackKeywords[];
  left?: boolean;
}) => {
  return (
    <div
      id={props.selectorId + "-selector"}
      className={`flex justify-center w-full h-[80vh] ${props.left ? "flex-row-reverse" : ""}`}
    >
      <div className="relative w-7/12">
        <div className="overflow-hidden shadow-xl mb-4 rounded">
          <img
            src={props.img}
            alt="img"
            className={`max-w-[60vw] w-full h-[60vh] object-cover  hover:scale-105 transition-all duration-500`}
          />
        </div>
        <p className="text-black-soft font-openSans text-left max-w-[90%] text-md ">{props.text}</p>
      </div>
      <div
        className={`px-14 w-5/12 h-[60vh] flex justify-end  ${
          props.left ? "items-end" : " items-start"
        } flex-col`}
      >
        <p className="text-black-soft/70 mb-6 font-openSans select-none">
          {props.stack.join(" - ")}
        </p>
        <p
          className={`text-black-soft mb-8 font-inter font-light text-8xl ${
            props.left ? "text-right" : "text-left"
          } name-trigger`}
        >
          {props.name}
        </p>
        <button className="w-44 h-12 bg-black-soft hover:bg-black-soft/80 transition-all rounded-xl text-white-bone">
          See live
        </button>
      </div>
    </div>
  );
};

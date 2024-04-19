const Resume = () => {
  return (
    <div
      id="resume"
      className="w-screen flex justify-center min-h-[calc(100vh-96px)] bg-white-bone z-30 mt-[-1px] sticky top-24 border-t border-t-black-soft"
    >
      <div className="flex  max-w-[1200px] w-full flex-col justify-start md:justify-center py-12 md:py-32 p-4 ">
        <div className="w-full h-full">
          {/* <p>Juan Urdaneta</p> */}
          <p className="text-2xl mr-2">What can I bring to your team?</p>
          <div>
            <p>Front end development</p>
            <p></p>
          </div>
        </div>
        <div className="w-full h-full">
          {/* <p>Juan Urdaneta</p> */}
          <a href="mailto:urdntjuan@gmail.com" className="flex items-end">
            <p className="text-2xl mr-2">Contact me:</p>
            <p>urdntjuan@gmail.com</p>
          </a>
        </div>
        {/* <div className="w-full md:w-1/2"> */}
        {/* <ResumeArticle
            name="Shortbread.ai"
            text="Developed a Webtoon / Webcomics editing experience from scratch that enables users to
              create and edit webcomics working closely with the product designer to create a
              scalable and robust architecture that will enable the product to grow without
              compromising core features. Worked on integrating backend APIs that generated /
              enhanced / edited images with AI generative models."
          />
          <ResumeArticle
            name="Grocersave"
            text="Developed front end features for a crowd sourced grocery list React Native App. 
            Worked closely with the Product Manager to develop specific workflows that enabled potential 
            power users to perform mass data update operations with a focus on data integrity and ease of use.
            Developed backend features that enabled the automation for mass product updates and allowed out 
            backend interact with core aws services."
          />
          <ResumeArticle
            name="Incept Landing page"
            text="Developed a responsive pixel-perfect website, worked in tandem with a webgl developer to architect the component 
            structure to fit the needs for three.js to run and adjust properly to the end design."
          />
          <ResumeArticle
            name="Climatika - Web 3d app"
            text="Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."
          />
          <ResumeArticle
            name="Dvinum"
            text="Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Refactored most of the data fetching pipeline and improved load times and app responsiveness overall."
          />
          <ResumeArticle
            name="Mesa Premium"
            text="Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers. "
          /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Resume;

// const ResumeArticle = (props: { name: string; text: string }) => {
//   return (
//     <div>
//       <p className="">
//         <b>{props.name}</b>
//       </p>
//       <p className="text-justify">{props.text}</p>
//     </div>
//   );
// };

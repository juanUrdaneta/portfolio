import React from "react";
import gsap from "gsap";

const Resume = () => {
  React.useEffect(() => {
    gsap.to("#resume", {
      borderRadius: 40,
      scrollTrigger: {
        trigger: "#resume",
        start: "top center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div
      id="resume"
      className="w-screen flex justify-center min-h-screen bg-emerald-400 z-30 mt-[-1px] sticky top-0"
    >
      <div className="flex  max-w-[1200px] w-full flex-col md:flex-row justify-start md:justify-center p-10 md:p-20 ">
        <div className="w-full md:w-1/2">
          <p>Juan Urdaneta</p>
          <a href="mailto:urdntjuan@gmail.com">
            contact me: urdntjuan@gmail.com
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <p>
              <b>Shortbread.ai</b>
            </p>
          </div>
          <div>
            <p>
              <b>Incept Landing page</b>
            </p>
          </div>
          <div>
            <p>
              <b>Crowedsourced shopping list app</b>
            </p>
          </div>
          <div>
            <p>
              <b>Mesa Premium</b>
            </p>
          </div>
          <div>
            <p>
              <b>Dvinum</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

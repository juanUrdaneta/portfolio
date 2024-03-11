const Projects = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <section className="w-full max-w-[1200px] my-2 py-20">
        {/* <h2 className="font-fragment text-teal-400 text-4xl w-full text-center">
          Past work
        </h2> */}
        <div className="flex justify-center w-full flex-col md:flex-row ">
          <div className="flex justify-center items-center flex-col w-1/2">
            <p className="text-white">Shortbread.ai</p>
            <p className="text-white">comic editor</p>
          </div>
          <img src="shortbread.webp" className=" w-[600px] h-auto max-w-3/4" />
        </div>
        <div className="mb-20"></div>
        <div className="flex justify-center w-full flex-col md:flex-row-reverse ">
          <div className="flex justify-center items-center flex-col w-1/2">
            <p className="text-white">Incept</p>
            <p className="text-white">Front End Landing page collab</p>
          </div>
          <img
            src="/incept.webp"
            width={600}
            height={600}
            className="max-w-3/4"
          />
        </div>
        <div className="mb-20"></div>
        <div className="flex justify-center w-full flex-col md:flex-row ">
          <div className="flex justify-center items-center flex-col w-1/2">
            <p className="text-white">Crowdsourced shopping list app</p>
            <p className="text-white">
              Features for mass updating and cataloging products
            </p>
          </div>
          <img src="shortbread.webp" className=" w-[600px] h-auto max-w-3/4" />
        </div>
        <div className="mb-20"></div>
        <div className="sticky top-0 z-10 flex justify-center w-full flex-col md:flex-row-reverse  ">
          <div className="flex justify-center items-center flex-col w-1/2">
            <p className="text-white">Mesa Premium</p>
            <p className="text-white">Yet to release restaurant bookings app</p>
          </div>
          <img
            src="/incept.webp"
            width={600}
            height={600}
            className="max-w-3/4"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;

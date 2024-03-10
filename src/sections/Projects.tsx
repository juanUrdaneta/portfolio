const Projects = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <section className="w-full max-w-[1200px] my-2">
        {/* <h2 className="font-fragment text-teal-400 text-4xl w-full text-center">
          Past work
        </h2> */}
        <div className="flex justify-center w-full ">
          <div className="flex justify-center items-center flex-col w-1/2">
            <p className="text-white">Shortbread.ai</p>
            <p className="text-white">comic editor</p>
          </div>
          <img src="shortbread.webp" width={600} height={600} />
        </div>
        <div className="my-6"></div>
        <div className="flex justify-center w-full ">
          <img src="/incept.webp" width={600} height={600} />
          <div className="flex justify-center items-center flex-col w-1/2">
            <p className="text-white">Incept</p>
            <p className="text-white">Front End Landing page collab</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

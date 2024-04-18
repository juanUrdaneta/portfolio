const Resume = () => {
  return (
    <div
      id="resume"
      className="w-screen flex justify-center min-h-screen bg-emerald-400 z-30 mt-[-1px] sticky top-0"
    >
      <div className="flex  max-w-[1200px] w-full flex-col md:flex-row justify-start md:justify-center py-12 md:py-32 ">
        <div className="w-full md:w-1/2">
          {/* <p>Juan Urdaneta</p> */}
          <a href="mailto:urdntjuan@gmail.com" className="flex items-end">
            <p className="text-2xl mr-2">Contact me:</p>
            <p>urdntjuan@gmail.com</p>
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
              <b>Advanced grocery list app</b>
            </p>
          </div>
          <div>
            <p>
              <b>Climatika - Web 3d app</b>
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

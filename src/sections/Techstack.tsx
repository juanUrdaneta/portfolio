const Techstack = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-[#fdfdfd] sticky top-0 z-20 mt-[-1px]">
      <section className="w-full max-w-[1200px] my-2 flex justify-around p-4 flex-wrap">
        <img src="/ts.svg" className="w-[100px] md:w-[180px]" />
        <img src="/nextjs.svg" className="w-[100px] md:w-[180px]" />
        <img src="/tailwindcss.svg" className="w-[100px] md:w-[180px]" />
        <img src="/firebase.svg" className="w-[100px] md:w-[180px]" />
        <img src="/aws.svg" className="w-[100px] md:w-[180px]" />
      </section>
    </div>
  );
};

export default Techstack;

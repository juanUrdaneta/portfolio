const Header = () => {
  return (
    <div className="w-screen bg-[#202020] flex justify-center items-center">
      <section className=" h-screen w-full max-w-[1200px] flex flex-col justify-center items-center">
        <h1 className="font-fragment text-6xl md:text-8xl select-none text-teal-400 font-regular text-center">
          Juan Urdaneta
        </h1>
        <div className=" h-fit p-2 flex justify-center items-center mt-12 rounded-2xl">
          <p className="font-fragment text-teal-400 text-xl md:text-4xl font-bold select-none bg-transparent uppercase ">
            Software developer
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;

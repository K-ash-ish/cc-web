function HeroSection() {
  return (
    <section className="hero-section h-screen    flex  md:justify-around items-center  relative overflow-hidden">
      <div className=" md:w-[40%] h-[70%]  md:h-[60%] text-white flex flex-col md:gap-10  items-center md:justify-around justify-evenly z-10">
        <div className="px-4  h-1/2 flex flex-col justify-around gap-2 md:h-auto">
          <h1 className="md:text-5xl text-6xl font-bold md:my-2  ">
            Ace Your Exams with Us
          </h1>
          <p className="font-thin text-xl md:text-base  w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maxime ab assumenda, culpa totam dolorum quasi odit velit nam.
          </p>
        </div>
        <button className="call-btn px-6 py-3    rounded-lg  text-white  transition-all duration-700  bg-purple-700 focus:ring-4  focus:ring-pink-200  capitalize  font-medium   flex">
          Schedule a call
        </button>
      </div>
      <div className=" hidden hero-logo z-10 md:flex bg-white min-w-[400px] min-h-[400px]  md:justify-center rounded-full  ">
        {" "}
        <img
          src="unnamed.webp"
          alt="logo"
          className="max-w-full max-h-full align-middle  object-contain "
          // width={200}
          // height={200}
        />
      </div>
      <div className="absolute hero-image top-0  ">
        {/* <img src="/math-doodle.png" alt="" /> */}
      </div>
    </section>
  );
}

export default HeroSection;

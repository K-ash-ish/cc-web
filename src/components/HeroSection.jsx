function HeroSection() {
  return (
    <section className="hero-section h-screen    flex md:flex-row flex-col-reverse gap-2  justify-center  md:justify-around items-center  relative overflow-hidden">
      <div className="md:w-[40%] min-h-[70%]  md:h-[60%]  text-white flex flex-col md:gap-10  items-center md:justify-around justify-evenly z-10">
        <div className="text-animate px-4  min-h-1/2 flex flex-col justify-around gap-2 md:h-auto">
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
      <div className=" hero-logo z-10 flex bg-white md:min-w-[400px] w-[200px] h-[200px]  md:min-h-[400px] items-center justify-center rounded-full  ">
        <img
          src="unnamed.webp"
          alt="logo"
          className=" align-middle  object-contain md:w-[300px] w-[150px] h-[150px] md:h-[300px]"
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

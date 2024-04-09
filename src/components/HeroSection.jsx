function HeroSection() {
  return (
    <div className=" hero-section h-full md:flex md:justify-center md:items-center relative overflow-hidden">
      <div className="border-2 md:w-[40%] md:h-[40%] text-white md:flex md:flex-col md:gap-10 md:items-center  z-10">
        <div className="">
          <h1 className="text-5xl font-bold my-2  ">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            maxime ab assumenda, culpa totam dolorum quasi odit velit nam.
          </p>
        </div>
        <button className="border-2">Schedule a call</button>
      </div>
      <div className="absolute hero-image">
        {/* <img src="/math-doodle.png" alt="" /> */}
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";

function About() {
  return (
    <section className=" card rounded-2xl min-h-full  md:w-4/6 md:mx-auto md:my-4 md:flex md:flex-col  ">
      <div className="  md:flex md:flex-col bg-white   md: items-center w-full  ">
        <img
          src="unnamed.webp"
          alt="logo"
          className="max-w-full max-h-full align-middle  object-contain "
          width={120}
          height={120}
        />
        <p className="font-thin  text-center ">
          Some line Lorem ipsum dolor sit amet consectetur{" "}
        </p>
      </div>
      <div className=" md:w-5/6 md:mx-auto md:my-4  md:h-full md:flex md:flex-col md:justify-evenly md:gap-3">
        {/* <h1 className="text-3xl font-semibold text-[#f89035] text-center my-2  ">
          About us
        </h1> */}
        <div className="">
          <h3 className="text-2xl font-semibold ">Our Mission:</h3>
          <p className="px-4 font-thin leading-loose text-xl my-2">
            To provide students with high-quality coaching, personalized
            attention, and a supportive learning environment that fosters
            excellence in academics and critical thinking.
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold ">Our Vision:</h3>
          <p className="px-4 font-thin leading-loose text-xl my-2">
            To be a beacon of academic success, shaping future generations of
            well-rounded individuals equipped to thrive in a competitive world.
          </p>
        </div>
        <div className=" ">
          <h3 className="text-2xl font-semibold ">Meet Our faculty</h3>
          <p className="px-4 font-thin leading-loose text-xl my-2">
            <div className="   md:flex md:flex-col   float-right  ">
              <img
                src=""
                alt="your-image"
                className="max-w-full max-h-full align-middle  object-contain rounded-full shadow-md shadow-orange-200 "
                width={150}
                height={150}
              />
              <div className="md:flex md:flex-col items-center text-xs text-center font-semibold text-[#f89035] my-2 ">
                <span className="text-lg">Name</span>
                <span className="text-black">contact</span>
              </div>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae suscipit dolor quaerat! Architecto alias temporibus
            dolores dolorem aperiam harum iure amet quia eum aspernatur quod id,
            cumque ipsa aut. lore
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

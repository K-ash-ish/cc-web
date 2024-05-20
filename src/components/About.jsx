import React from "react";

function About() {
  return (
    <section className="bg-white card rounded-2xl min-h-full  md:w-4/6 w-11/12 mx-auto my-4 flex flex-col  ">
      <div className="  flex flex-col  items-center w-full  ">
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
      <div className=" mx-4  md:w-4/5 md:mx-auto my-4  h-full flex flex-col justify-evenly gap-3">
        {/* <h1 className="text-3xl font-semibold text-[#f89035] text-center my-2  ">
          About us
        </h1> */}
        <div className="">
          <h3 className="md:text-2xl text-xl font-semibold ">Our Mission:</h3>
          <p className="md:px-4 font-thin leading-loose md:text-xl md:my-2">
            To provide students with high-quality coaching, personalized
            attention, and a supportive learning environment that fosters
            excellence in academics and critical thinking.
          </p>
        </div>
        <div className="">
          <h3 className="md:text-2xl text-xl font-semibold ">Our Vision:</h3>
          <p className="px-2 md:px-4 font-thin leading-loose md:text-xl md:my-2">
            To be a beacon of academic success, shaping future generations of
            well-rounded individuals equipped to thrive in a competitive world.
          </p>
        </div>
        <div className=" ">
          <h3 className="md:text-2xl text-xl font-semibold ">
            Meet Our faculty
          </h3>
          <div className="px-2 md:px-4 font-thin leading-loose md:text-xl md:my-2">
            <div className="   flex flex-col   float-right  ">
              <img
                src=""
                alt="your-image"
                className="max-w-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] max-h-full align-middle  object-contain rounded-full shadow-md shadow-orange-200 "
                width={150}
                height={150}
              />
              <div className="flex flex-col items-center text-xs text-center font-semibold text-[#f89035] my-2 ">
                <span className="md:text-lg text-base">Name</span>
                <span className="text-black">contact</span>
              </div>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            repudiandae suscipit dolor quaerat! Architecto alias temporibus
            dolores dolorem aperiam harum iure amet quia eum aspernatur quod id,
            cumque ipsa aut. lore
            1.hello
            2.hello
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

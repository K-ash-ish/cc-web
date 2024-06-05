import { urlFor } from "@/client";
import React from "react";
import { useLoaderData } from "react-router-dom";

function About() {
  const data = useLoaderData();
  const { our_mission, our_vision, faculty_info } = data[0];

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
        <p className="font-thin  text-center italic">
          Learn Understand Succeed
        </p>
      </div>
      <div className=" mx-4  md:w-4/5 md:mx-auto my-4  h-full flex flex-col justify-evenly gap-3">
        {/* <h1 className="text-3xl font-semibold text-[#f89035] text-center my-2  ">
          About us
        </h1> */}
        <div className="">
          <h3 className="md:text-2xl text-xl font-semibold ">Our Mission:</h3>
          <p className="md:px-4 font-thin leading-loose md:text-xl md:my-2">
            {our_mission}
          </p>
        </div>
        <div className="">
          <h3 className="md:text-2xl text-xl font-semibold ">Our Vision:</h3>
          <p className="px-2 md:px-4 font-thin leading-loose md:text-xl md:my-2">
            {our_vision}
          </p>
        </div>
        <div className=" ">
          <h3 className="md:text-2xl text-xl font-semibold ">
            Meet Our faculty
          </h3>
          {faculty_info?.map((faculty) => {
            return (
              <div
                key={faculty._key}
                className="px-4 py-2 font-thin leading-loose md:text-xl my-4 rounded-md shadow-md min-h-[250px]"
              >
                <h1 className="text-2xl my-2 font-semibold text-[#f89035] underline underline-offset-2">
                  {faculty?.name}
                </h1>
                <div className="   flex flex-col   float-right  ">
                  <img
                    src={urlFor(faculty.image).url()}
                    alt="your-image"
                    className="max-w-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] max-h-full align-middle  object-contain rounded-full shadow-md shadow-orange-200 mx-2 "
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col items-center text-xs text-center font-semibold text-[#f89035] my-2 ">
                    <span className="text-black underline underline-offset-1">
                      {faculty?.contact_number}
                    </span>
                  </div>
                </div>
                {faculty?.about_faculty}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;

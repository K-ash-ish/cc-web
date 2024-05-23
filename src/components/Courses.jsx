import { sanityClient, urlFor } from "@/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
function Courses() {
  const data = [];
  // const data = [
  //   {
  //     _rev: "wuUgJKJlubdxTenN7LoMXW",
  //     _type: "course_detail",
  //     special_course: [
  //       {
  //         course_image: {
  //           _type: "image",
  //           asset: {
  //             _ref: "image-27757fe98ae16863f254d96ee34e394b660adc7e-256x197-jpg",
  //             _type: "reference",
  //           },
  //         },
  //         course_description:
  //           '"Kickstart your web development journey! Master HTML, CSS, and JavaScript to build your own stunning web pages from scratch in our beginner-friendly course. Join now and create your first website in no time!"',
  //         course_start_date: "2025-05-05",
  //         course_name: "Basic of Web Development",
  //         course_status: "upcoming",
  //         course_duration: 1,
  //         course_price: 199,
  //         _key: "05db814d7920",
  //       },
  //       {
  //         course_image: {
  //           _type: "image",
  //           asset: {
  //             _ref: "image-27757fe98ae16863f254d96ee34e394b660adc7e-256x197-jpg",
  //             _type: "reference",
  //           },
  //         },
  //         course_description:
  //           '"Kickstart your web development journey! Master HTML, CSS, and JavaScript to build your own stunning web pages from scratch in our beginner-friendly course. Join now and create your first website in no time!"',
  //         course_start_date: "2025-05-05",
  //         course_name: "Basic of Web Development",
  //         course_status: "upcoming",
  //         course_duration: 1,
  //         course_price: 199,
  //         _key: "05db814d7920",
  //       },
  //       {
  //         course_image: {
  //           _type: "image",
  //           asset: {
  //             _ref: "image-27757fe98ae16863f254d96ee34e394b660adc7e-256x197-jpg",
  //             _type: "reference",
  //           },
  //         },
  //         course_description:
  //           '"Kickstart your web development journey! Master HTML, CSS, and JavaScript to build your own stunning web pages from scratch in our beginner-friendly course. Join now and create your first website in no time!"',
  //         course_start_date: "2025-05-05",
  //         course_name: "Basic of Web Development",
  //         course_status: "upcoming",
  //         course_duration: 1,
  //         course_price: 199,
  //         _key: "05db814d7920",
  //       },
  //     ],
  //     _id: "5196db35-9e13-421b-957e-74d0c4b16893",
  //     _updatedAt: "2024-05-23T12:52:36Z",
  //     course_type: "Special",
  //     _createdAt: "2024-05-23T07:29:36Z",
  //   },
  // ];
  const { course_type = "", special_course = "", _id = "" } = data[0] || {};
  if (data?.length === 0) {
    return (
      <div className="flex justify-center items-center bg-white rounded-md  md:px-3 p-2  md:min-h-[600px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 ">
        <h1 className="text-3xl capitalize">No special courses yet...!</h1>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-md  md:px-4 p-2  md:min-h-[600px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 ">
      <h1 className="text-2xl  font-semibold p-2 bg-gray-100  rounded-md">
        {course_type}
      </h1>
      <div className="my-4 flex flex-col items-center gap-8 px-2 md:flex-row md:justify-around flex-wrap">
        {special_course?.map((course) => (
          <div
            key={course._id}
            className=" bg-white rounded-md card flex flex-col items-center px-2 gap-3 md:w-[380px]"
          >
            <img
              src={urlFor(course?.course_image).url()}
              className="w-[200px] h-[200px]"
              alt=""
            />
            <div className=" flex items-center justify-between w-full ">
              <h3 className="text-xl  font-semibold text-fuchsia-500">
                {course.course_name}
              </h3>
              <span className="text-lg font-bold text-green-500">
                {course.course_price}₹
              </span>
            </div>
            <p className="text-center leading-relaxed text-black">
              {course.course_description}
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <span className="font-semibold">{course.course_start_date}</span>{" "}
              <span className="card rounded-full px-4 py-2 bg-indigo-400 capitalize text-white">
                {course.course_status}
              </span>{" "}
            </div>
            <Button className="bg-green-500 my-2">Enroll Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

/* eslint-disable react/prop-types */
import { urlFor } from "@/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SpecialCourses({ special_course }) {
  if (special_course.length === 0) {
    return (
      <div className="flex justify-center items-center bg-white rounded-md  md:px-3 p-2  md:min-h-[600px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 ">
        <h1 className="text-3xl capitalize">No special courses yet...!</h1>
      </div>
    );
  }
  return (
    <div className="  bg-white rounded-md  md:px-4 p-2  md:min-h-[600px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 ">
      <h1 className="text-2xl  font-semibold p-2 bg-gray-100  rounded-md">
        Special Courses:
      </h1>
      <div className="my-4 flex flex-col items-center gap-8 px-2 md:flex-row md:justify-around flex-wrap">
        {special_course?.map((course, i) => (
          <div
            key={i}
            className=" bg-white rounded-md card flex flex-col items-center  px-3 py-2 md:px-2 gap-3 md:w-[380px] w-4/5 md:h-[450px]"
          >
            <img
              src={urlFor(course?.course_image).url()}
              className="w-[200px] h-[120px] object-contain "
              alt="course-image"
              width={200}
              height={200}
            />
            <div className=" flex items-center justify-between w-full my-1 ">
              <h3 className="text-xl  font-semibold text-fuchsia-500 capitalize">
                {course.course_name}
              </h3>
              <span className="text-lg font-bold text-green-500">
                {course.course_price}₹
              </span>
            </div>
            <p className="text-center leading-relaxed text-black min-h-36 w-full">
              {course.course_description}
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <span className="font-semibold">{course.course_start_date}</span>{" "}
              <span className="card rounded-full px-4 py-2 bg-indigo-400 capitalize text-white">
                {course.course_status}
              </span>{" "}
            </div>

            <Link
              to="https://forms.gle/FogDUoUc1PX7msjp9"
              target="_blank"
              className="bg-green-500 my-2 px-4 py-2 rounded-md"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialCourses;

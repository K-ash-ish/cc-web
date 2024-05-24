import { sanityClient, urlFor } from "@/client";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import SpecialCourses from "./SpecialCourses";
import RegularCourses from "./RegularCourses";
function Courses() {
  const data = useLoaderData();
  const { courseName } = useParams();
  const {
    course_type = "",
    special_course = [],
    material = [],
  } = (data && data[0]) ?? {};
  if (courseName === "special")
    return (
      <SpecialCourses
        course_type={course_type}
        special_course={special_course}
      />
    );
  return <RegularCourses material={material} />;
}

export default Courses;

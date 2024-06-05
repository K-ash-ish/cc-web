import { useLoaderData, useParams } from "react-router-dom";
import SpecialCourses from "@/pages/SpecialCourses";
import CourseMaterial from "@/pages/RegularCourses";

import Classroom from "@/pages/Classroom";
import HomeTution from "@/pages/HomeTution";
function Courses() {
  const data = useLoaderData();
  const { courseName } = useParams();
  const {
    course_type = "",
    special_course = [],
    material = [],
  } = (data && data[0]) ?? {};

  if (courseName === "hometution") {
    return <HomeTution />;
  }
  if (courseName === "classroom") {
    return <Classroom />;
  }
  if (courseName === "special")
    return (
      <SpecialCourses
        course_type={course_type}
        special_course={special_course}
      />
    );
  return <CourseMaterial material={material} />;
}

export default Courses;

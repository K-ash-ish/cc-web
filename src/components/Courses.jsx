import { sanityClient, urlFor } from "@/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
import SpecialCourses from "./SpecialCourses";
import RegularCourses from "./RegularCourses";
function Courses() {
  const data = [
    {
      course_type: "CBSE",
      material: [
        {
          material_type: "question_paper",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 Physics Previous Year (2018) Question paper",
          class: 12,
        },
        {
          material_type: "blog",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 BLOG",
          class: 12,
        },
        {
          material_type: "blog",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 BLOG",
          class: 12,
        },
        {
          title: "Question paper",
          class: 9,
          material_type: "question_paper",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "a80749840124",
        },
        {
          material_type: "video",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 Physics Previous Year (2018) Question paper",
          class: 12,
        },
        {
          material_type: "video",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 Physics Previous Year (2018) Question paper",
          class: 12,
        },
        {
          material_type: "other",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 Physics Previous Year (2018) Question paper",
          class: 12,
        },
        {
          material_type: "other",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 Physics Previous Year (2018) Question paper",
          class: 12,
        },
        {
          material_type: "question_paper",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 Physics Previous Year (2018) Question paper",
          class: 10,
        },
        {
          material_type: "blog",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 BLOG",
          class: 10,
        },
        {
          material_type: "blog",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 12 BLOG",
          class: 10,
        },
        {
          title: "Question paper",
          class: 8,
          material_type: "question_paper",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "a80749840124",
        },
        {
          material_type: "video",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 10 Physics Previous Year (2018) Question paper",
          class: 10,
        },
        {
          material_type: "video",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 10 Physics Previous Year (2018) Question paper",
          class: 10,
        },
        {
          material_type: "other",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 10 Physics Previous Year (2018) Question paper",
          class: 10,
        },
        {
          material_type: "other",
          link: "https://www.cbse.gov.in/cbsenew/question-paper/2022/XII/food_production.zip",
          _key: "4c9cb90fed29",
          title: "Class 10 Physics Previous Year (2018) Question paper",
          class: 10,
        },
      ],
      _createdAt: "2024-05-24T07:17:50Z",
      _rev: "ifjrlh8MYXGMNmzEfgBqdn",
      _type: "course_detail",
      _id: "7f8606d1-3b05-4bb6-a5c4-c5876d26be67",
      _updatedAt: "2024-05-24T07:18:42Z",
    },
  ];
  // useEffect(() => {
  //   (async () => {
  //     const data = await sanityClient
  //       .fetch(`*[_type == "course_detail" && course_type == "CBSE"]`)
  //       .then((data) => data);
  //     console.log(data);
  //   })();
  // }, []);
  const {
    course_type = "",
    special_course = "",
    material = "",
  } = data[0] || {};


  return <RegularCourses material={material} />;
  return (
    <SpecialCourses course_type={course_type} special_course={special_course} />
  );
}

export default Courses;

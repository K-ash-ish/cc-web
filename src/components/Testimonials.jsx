import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLoaderData } from "react-router-dom";

function Testimonials() {
  const studentReviews = useLoaderData();
  const responsive = {
    desktop: {
      breakpoint: { max: 1600, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 420, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-[#41C9E2] testimonials  h-screen capitalize flex flex-col items-center gap-6 py-2 ">
      <div className=" border-2  py-2 px-4 rounded-md shadow-sm shadow-gray-100 my-4 text-2xl font-medium">
        Testimonials
      </div>
      <h2 className=" md:text-5xl text-3xl text-white font-semibold text-center">
        Transform Your{" "}
        <span className="text-black [text-shadow:_4px_3px_10px_rgb(0_0_0_/_40%)] font-bold">
          academic
        </span>{" "}
        journey
      </h2>
      <p className=" text-xl font-medium  underline underline-offset-2 text-white">
        Hear from our students
      </p>
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        keyBoardControl={true}
        customTransition={"transform 700ms ease-in-out"}
        transitionDuration={"700"}
        slidesToSlide={1}
        containerClass=" w-5/6 h-full "
        itemClass=" card bg-white  text-center flex flex-col  justify-center  md:p-4  md:mx-4 mx-1 px-2 py-4  rounded-2xl  md:min-h-[350px] min-h-[200px]  "
      >
        {studentReviews?.map((review, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center  gap-10 h-full"
            >
              <p className="font-thin ">
                {`"${
                  review?.student_review.length < 350
                    ? review?.student_review
                    : review?.student_review?.slice(0, 350) + "..."
                }"`}
              </p>
              <p className="italic my-1  text-[#F89035] ">
                {review?.student_name}{" "}
                <span className="font-bold">
                  {review.student_percentage}%,{" "}
                </span>
                <span className="italic font-thin text-sm">
                  Class {review.student_class}
                </span>
              </p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Testimonials;

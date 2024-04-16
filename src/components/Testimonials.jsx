function Testimonials() {
  const studentReviews = [
    {
      name: "Some Name",
      percentage: "90%",
      message:
        "llorem ipsumlorem ipsumlorem ipsumlorem ipsumldsfasdfa asdfa sdfa sdfa sdforem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem ipsum",
    },
    {
      name: "Some Name",
      percentage: "90%",
      message:
        "llorem ipsumloremm ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem im ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem i ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem ipsum",
    },
    {
      name: "Some Name",
      percentage: "90%",
      message:
        "llorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumorem ipsum",
    },
  ];
  return (
    <section className="bg-[#41C9E2] testimonials  md:h-full capitalize flex flex-col items-center gap-4 py-2 ">
      <div className=" bg-rose-500 shadow-rose-500 shadow-md text-white md:px-4 px-3 py-2 md:py-2 rounded-md md:text-2xl font-medium">
        Testimonials
      </div>
      <h2 className=" md:text-5xl text-3xl text-white font-semibold ">
        Transform Your{" "}
        <span className="text-black [text-shadow:_4px_3px_10px_rgb(0_0_0_/_40%)] font-bold">
          academic
        </span>{" "}
        journey
      </h2>
      <p className=" text-xl font-medium  underline underline-offset-2 text-white">
        Hear from our students
      </p>
      <div className=" w-5/6 h-full flex flex-col items-center gap-4 md:flex-row md:justify-around md:items-center">
        {studentReviews?.map((review, i) => {
          return (
            <div
              key={i}
              className="bg-white w-[300px] max-h-[500px] text-center flex flex-col  justify-around p-4 min-h-[250px] rounded-lg shadow-md shadow-zinc-400 gap-1 "
            >
              <p className="font-thin ">
                "
                {review?.message.length < 350
                  ? review?.message
                  : review?.message?.slice(0, 350) + "..."}
                "
              </p>
              <p className="italic">
                {review?.name}{" "}
                <span className="font-bold">{review.percentage}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;

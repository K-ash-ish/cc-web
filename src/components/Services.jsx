import React from "react";

function Services() {
  const cardsData = [
    {
      title: "One-on-one doubt class",
      list: [
        "Individualized tutoring session",
        "Personalized Q&A session",
        "Focused learning session",
      ],
      color: "blue",
    },
    {
      title: "Class notes",
      list: ["Course materials", "Study guides", "Learning resources"],
      color: "green",
    },
    {
      title: "Group studies",
      list: [
        "Collaborative learning sessions",
        "Study groups",
        "Peer-to-peer learning sessions",
        "Group discussions",
      ],
      color: "yellow",
    },
  ];
  return (
    <section className="bg-white min-h-[400px] flex flex-col">
      <h2 className="text-3xl font-bold  text-center self-center my-2">
        Support and Guidance
      </h2>
      <ul className="flex flex-col  items-center gap-8 md:flex-row md:justify-around md:items-center  flex-1 my-6">
        {cardsData?.map((data, i) => {
          return (
            <li
              className={`w-[250px] min-h-[250px] px-2 card-${data?.color} rounded-lg p-4 `}
              key={i}
            >
              <h3 className="text-2xl capitalize font-medium text-center">
                {data?.title}
              </h3>
              <ul className="flex flex-col items-center gap-2 mt-4 ">
                {data?.list?.map((d, i) => {
                  return (
                    <li key={i} className="font-thin">
                      {d}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Services;

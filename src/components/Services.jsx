import React, { useEffect, useRef, useState } from "react";

function Services() {
  const cardsData = [
    {
      title: "One-on-one doubt class",
      list: [
        "Individualized tutoring session",
        "Personalized Q&A session",
        "Focused learning session",
      ],
    },
    {
      title: "Class notes",
      list: ["Course materials", "Study guides", "Learning resources"],
    },
    {
      title: "Group studies",
      list: [
        "Collaborative learning sessions",
        "Study groups",
        "Peer-to-peer learning sessions",
        "Group discussions",
      ],
    },
  ];
  const desktopListRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    let options;
    if (window.innerWidth <= 770) {
      options = {
        threshold: 0.8,
      };
    } else {
      options = {
        threshold: 1,
      };
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, options);
    observer.observe(desktopListRef.current);
  }, []);
  return (
    <section className="bg-white md:min-h-[500px] flex flex-col justify-center md:gap-10 ">
      <h2 className="text-3xl font-bold  text-center self-center my-2 text-[#FE478B] ">
        Support and Guidance
      </h2>
      <ul
        className={`flex flex-col  items-center gap-8 md:flex-row md:justify-around md:items-center   my-6 `}
        ref={desktopListRef}
      >
        {cardsData?.map((data, i) => {
          return (
            <li
              className={`w-[300px] min-h-[250px] px-2 card  rounded-3xl p-4 `}
              key={i}
            >
              <h3
                className={`text-2xl capitalize font-medium text-center  opacity-0 ${
                  isVisible ? " text-animate opacity-100 " : ""
                } `}
              >
                {data?.title}
              </h3>
              <ul
                className={`flex flex-col items-center gap-2 mt-4 leading-loose opacity-0 ${
                  isVisible ? " text-animate opacity-100 " : ""
                }`}
              >
                {data?.list?.map((d, i) => {
                  return (
                    <li key={i} className="font-thin card--text ">
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

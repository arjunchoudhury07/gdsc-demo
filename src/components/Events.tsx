import React from "react";
import EventCard from "./EventCard";

function Events() {
  const data = [
    {
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/JWOC%20Logo%20Final_9WfsOFx.png",
      date: "5 FEB, 2022",
      title: "Workshop / Study Group",
      content: "Intro to Git and GitHub | JWoC",
      url: "",
    },
    {
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/JWOC%20Logo%20Final_9WfsOFx.png",
      date: "5 FEB, 2022",
      title: "Workshop / Study Group",
      content: "Intro to Git and GitHub | JWoC",
      url: "",
    },
    {
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/JWOC%20Logo%20Final_9WfsOFx.png",
      date: "5 FEB, 2022",
      title: "Workshop / Study Group",
      content: "Intro to Git and GitHub | JWoC",
      url: "",
    },
    {
      image:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/JWOC%20Logo%20Final_9WfsOFx.png",
      date: "5 FEB, 2022",
      title: "Workshop / Study Group",
      content: "Intro to Git and GitHub | JWoC",
      url: "",
    },
  ];
  return (
    <section className="flex h-screen flex-col items-center overflow-hidden bg-gradient-to-tr  from-blue-500 to-green-500 pt-10 text-white lg:h-[90vh]">
      <h2 className="text-4xl font-bold lg:text-5xl">LATEST EVENTS</h2>
      <div className="flex h-full w-screen items-center overflow-y-hidden overflow-x-scroll  scrollbar scrollbar-track-gray-100 scrollbar-thumb-green-400 ">
        {data.map((event, index) => (
          <div key={index} className=" w-screen flex-shrink-0 px-5 sm:w-96">
            <EventCard
              image={event.image}
              title={event.title}
              url={event.url}
              content={event.content}
              date={event.date}
            />
          </div>
        ))}
      </div>
      <div className="p-8 text-lg font-bold lg:hidden">Swipe to Explore</div>
    </section>
  );
}

export default Events;

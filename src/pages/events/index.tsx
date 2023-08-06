import EventCard from "@/components/EventCard";
import React from "react";

function index() {
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
    <div className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-700 ">
        PAST EVENTS
      </h1>
      <div className="flex max-w-7xl flex-col flex-wrap items-center  justify-center gap-10 py-10 lg:flex-row">
        {data?.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            url={event.url}
            content={event.content}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
}

export default index;

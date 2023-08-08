import EventCard from "@/components/EventCard";
import React from "react";
import { Data } from "../../data/eventsdata";

function index() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-700 ">
        PAST EVENTS
      </h1>
      <div className="flex max-w-7xl flex-col flex-wrap items-center justify-center gap-10 py-10 lg:flex-row">
        {Data?.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            url={`events/${index}`}
            content={event.content}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
}

export default index;

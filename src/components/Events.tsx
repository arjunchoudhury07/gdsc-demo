import Link from "next/link";
import React from "react";
import EventCard from "./EventCard";
import { Data } from "../data/eventsdata";

function Events() {
  return (
    <section className="flex h-screen flex-col items-center overflow-hidden bg-gradient-to-tr from-blue-500  to-green-500 py-10 text-white lg:h-[90vh]">
      <h2 className="text-4xl font-bold lg:text-5xl">LATEST EVENTS</h2>
      <div className="flex h-full w-screen items-center overflow-y-hidden overflow-x-scroll  scrollbar scrollbar-track-gray-100 scrollbar-thumb-green-400 ">
        {Data?.map((event, index) => (
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
      <Link
        href="/events"
        className="mt-5 rounded-lg bg-green-500 px-5 py-3 text-lg font-bold text-white"
      >
        <p>View All</p>
      </Link>
    </section>
  );
}

export default Events;

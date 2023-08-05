import React from "react";
import EventCard from "./EventCard";

type Props = {};

function Events({}: Props) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="flex h-screen flex-col items-center overflow-hidden bg-gradient-to-tr  from-blue-500 to-green-500 pt-10 text-white lg:h-[90vh]">
      <h2 className="text-4xl font-bold lg:text-5xl">LATEST EVENTS</h2>
      <div className="flex h-full w-screen items-center  overflow-y-hidden overflow-x-scroll ">
        {data.map((event) => (
          <div className=" w-screen flex-shrink-0 px-5 sm:w-96">
            <EventCard />
          </div>
        ))}
      </div>
      <div className="p-8 text-lg font-bold lg:hidden">Swipe to Explore</div>
    </section>
  );
}

export default Events;

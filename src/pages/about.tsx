import React from "react";

type Props = {};

export default function about({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-700 ">
        OUR VISION
      </h1>
      <iframe
        width="1170"
        height="658"
        src="https://www.youtube.com/embed/9mTnqgmkp6M?autoplay=1&mute=1&controls=0"
        title="GDSC JGEC Intro Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="h-56 py-8"
      ></iframe>
      <p className="text-center">
        At GDSC JGEC, we envision a thriving and inclusive tech community that
        empowers and inspires students to become innovative problem solvers and
        change-makers. Our vision is to create a dynamic platform that fosters a
        passion for technology, collaboration, and social impact within the
        college campus and beyond. We strive to be a beacon of creativity,
        knowledge, and transformative experiences that equip students with the
        skills and mindset to drive positive change in the world.
      </p>
    </div>
  );
}

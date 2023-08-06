import Image from "next/image";
import React from "react";

function GoalCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="h-72 max-w-sm space-y-6 rounded-xl bg-zinc-100 px-7   py-10 shadow-xl md:h-96">
      <div className="text-xl font-bold lg:text-3xl">{title}</div>
      <div className="text-sm lg:text-lg">{description}</div>
    </div>
  );
}

export default function about() {
  const goals = [
    {
      title: "Empowerment through Technology",
      description:
        "We believe in the power of technology as a force for good. We aim to equip students with cutting-edge technical skills, enabling them to leverage technology to address real-world challenges and contribute meaningfully to society.",
    },
    {
      title: "Inclusivity and Diversity",
      description:
        "GDSC JGEC stands for a welcoming and inclusive environment that celebrates diversity. We value and embrace the unique perspectives and talents of each individual, fostering an atmosphere where everyone feels valued and respected.",
    },
    {
      title: "Community-Driven Collaboration",
      description:
        "We envision GDSC JGEC as a tightly-knit community where students, irrespective of their background, can collaborate, learn from each other, and collectively grow as professionals and individuals.",
    },
    {
      title: "Social Impact and Responsible Innovation",
      description:
        "Our vision extends beyond technical excellence. We encourage students to apply their skills to create solutions that positively impact communities and the environment. Responsible innovation is at the core of our approach.",
    },
    {
      title: "Lifelong Learning",
      description:
        "We believe that learning is a lifelong journey. GDSC JGEC aims to be a place where students continuously expand their knowledge and stay updated with the latest technological advancements.",
    },
    {
      title: "Industry Connections",
      description:
        "Our vision includes forging strong partnerships with industry experts, professionals, and organizations. We seek to provide students with exposure to the real-world tech industry, inspiring them to pursue successful careers.",
    },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 p-10">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-700 ">
        OUR VISION
      </h1>
      {/* <div className="aspect-h-9 aspect-w-16">
        <iframe
        fre
          src="https://www.youtube.com/embed/9mTnqgmkp6M?autoplay=1&mute=1&controls=0"
          title="GDSC JGEC Intro Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <Image
          alt=""
          height={400}
          width={400}
          src="https://img.freepik.com/free-vector/business-vision-concept-illustration_114360-7130.jpg"
        />
        <p className="max-w-2xl text-center lg:pl-20 lg:text-left lg:text-lg">
          At GDSC JGEC, we envision a thriving and inclusive tech community that
          empowers and inspires students to become innovative problem solvers
          and change-makers. Our vision is to create a dynamic platform that
          fosters a passion for technology, collaboration, and social impact
          within the college campus and beyond. We strive to be a beacon of
          creativity, knowledge, and transformative experiences that equip
          students with the skills and mindset to drive positive change in the
          world.
        </p>
      </div>

      <div className="flex max-w-7xl flex-col items-center gap-10">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-700 ">
          OUR GOALS
        </h2>
        <div className="flex flex-col flex-wrap items-center justify-center gap-8 py-8 md:flex-row">
          {goals.map((goal, index) => (
            <GoalCard
              key={index}
              title={goal.title}
              description={goal.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

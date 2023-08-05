import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center p-5 py-8 lg:flex-row 2xl:p-0">
      <div className="flex max-w-3xl flex-col items-center justify-center lg:items-start lg:gap-y-8">
        <div className="bg-gradient-to-tr from-blue-500 to-green-500  bg-clip-text text-center text-5xl font-extrabold leading-tight tracking-tighter text-transparent  antialiased lg:text-left lg:text-7xl">
          Welcome To Google Developer Student Clubs
        </div>
        <Image
          className="lg:hidden"
          height={400}
          width={400}
          alt=""
          src="https://thumbs.dreamstime.com/b/friends-doing-high-five-big-people-team-together-happy-friend-group-informal-greeting-command-motivation-vector-concept-166861902.jpg"
        />
        <div className="max-w-xl text-center text-sm font-bold leading-relaxed lg:text-left lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptatibus cumque atque amet necessitatibus. Praesentium temporibus
          maxime similique laudantium alias porro dolore, cumque necessitatibus
          ipsum distinctio quam dignissimos eligendi amet.
        </div>
        <div className="flex flex-col items-center gap-4 pt-5 lg:flex-row lg:p-0">
          <button className="flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-green-500 py-5 pl-9 pr-6 text-lg font-bold text-white">
            <p className="pb-1">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <button className=" flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-green-500  bg-clip-text py-4 pl-9 pr-6 text-lg font-bold ring-2 ring-zinc-400 ">
            <p className=" pb-1">Join Now</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <Image
        className="hidden lg:block"
        height={500}
        width={500}
        alt=""
        src="https://thumbs.dreamstime.com/b/friends-doing-high-five-big-people-team-together-happy-friend-group-informal-greeting-command-motivation-vector-concept-166861902.jpg"
      />
    </main>
  );
};

export default Hero;

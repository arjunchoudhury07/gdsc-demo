import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  date: string;
  title: string;
  content: string;
  url: string;
};

const EventCard = ({ image, title, date, content, url }: Props) => {
  return (
    <div className=" max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <Image
          height={100}
          width={100}
          className="h-56 w-full rounded-t-lg object-cover"
          src={image ?? ""}
          alt=""
        />
      </a>
      <div className="p-5">
        <p className="pb-1 text-xs font-normal text-gray-700 dark:text-gray-400">
          FEB 5, 2023
        </p>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="px- inline-flex items-center gap-1 rounded-lg bg-gradient-to-tr from-blue-500 to-green-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default EventCard;

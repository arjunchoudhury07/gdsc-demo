import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../data/data";

type Props = {
  image: string;
  name: string;
  stars: number;
  forks: number;
  description: string | null;
  topics: string[];
  url: string;
  language: string;
};

function ProjectCard({
  image,
  name,
  stars,
  description,
  forks,
  url,
  topics,
  language,
}: Props) {
  return (
    <div className=" flex w-full max-w-md flex-col items-start gap-5 rounded-lg bg-zinc-100 px-4 py-8  shadow-xl shadow-zinc-300  ">
      <div className="flex items-center justify-start   ">
        <Image
          className="h-20 w-20 rounded-full"
          alt=""
          height={100}
          width={100}
          src={image ?? ""}
        />
        <div className="space-y-1 pl-5">
          <h3 className="w-40 overflow-hidden text-clip text-xl font-bold text-zinc-800 sm:w-full md:text-2xl">
            {name}
          </h3>
          <div className="flex gap-5  font-bold text-zinc-500 md:text-lg">
            <div className="flex items-center gap-1">
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
                className="fill-yellow-400 stroke-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <p>{stars}</p>
            </div>
            <div className="flex items-center gap-1">
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
                className="lucide lucide-git-fork"
              >
                <circle cx="12" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                <path d="M12 12v3" />
              </svg>
              <p>{forks}</p>
            </div>
            <p className="rounded-full bg-zinc-400 bg-gradient-to-tr from-blue-500 to-green-500 px-2 py-1 text-xs text-white">
              {language}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="inline-block rounded-full  bg-gradient-to-tr from-blue-500 to-green-500 px-2 py-0.5 text-xs font-semibold text-white"
          >
            {topic}
          </div>
        ))}
      </div>

      <p className="text-zinc-600">{description}</p>
      <Link
        target="_blank"
        className="rounded-lg bg-gradient-to-tr from-blue-500 to-green-500 px-5 py-3 font-bold text-white "
        href={url}
      >
        Contribute Now
      </Link>
    </div>
  );
}

function Community() {
  return (
    <div className="flex min-h-screen flex-col items-center p-5">
      <h1 className="py-10 text-center text-4xl font-bold tracking-tight text-zinc-700 ">
        COMMUNITY PROJECTS
      </h1>
      <div className="item-center flex flex-col flex-wrap justify-center gap-10 md:flex-row">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.owner.avatar_url}
            name={project.name}
            url={project.html_url}
            description={project.description}
            topics={project.topics}
            forks={project.forks_count}
            stars={project.stargazers_count}
            language={project.language}
          />
        ))}
      </div>
    </div>
  );
}

export default Community;

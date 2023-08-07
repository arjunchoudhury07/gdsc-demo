import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="absolute bottom-16 left-36 -z-10 hidden h-96 w-96 animate-ping rounded-full bg-blue-400 opacity-40 blur-3xl sm:block" />
      <div className="absolute right-28 top-10 -z-10 hidden h-96 w-96 rounded-full bg-green-400 opacity-40 blur-3xl sm:block" />

      <main className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center p-5 py-8 lg:flex-row 2xl:p-0">
        <div className="flex max-w-3xl flex-col items-center justify-center lg:items-start lg:gap-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="bg-gradient-to-tr from-blue-500 to-green-500  bg-clip-text text-center text-5xl font-extrabold leading-tight tracking-tighter text-transparent  antialiased lg:text-left lg:text-7xl"
          >
            Welcome To Google Developer Student Clubs
          </motion.h1>
          <h2 className="ld:text-left pt-5 text-center text-xl font-bold tracking-tight text-zinc-700 lg:pt-0 lg:text-2xl">
            Empowering Innovators, Impacting Communities!
          </h2>

          <Image
            className="lg:hidden"
            height={400}
            width={400}
            alt=""
            src="https://thumbs.dreamstime.com/b/friends-doing-high-five-big-people-team-together-happy-friend-group-informal-greeting-command-motivation-vector-concept-166861902.jpg"
          />
          <div className="max-w-xl text-center text-sm leading-relaxed text-zinc-600 lg:text-left lg:text-lg">
            Join us on an extraordinary journey of learning, collaboration, and
            making a difference. Discover a wealth of resources, workshops, and
            events designed to sharpen your technical prowess and cultivate your
            creativity. Whether you`&apos;`re a coding enthusiast, aspiring
            entrepreneur, or a social impact advocate, GDSC JGEC welcomes you
            with open arms.
          </div>
          <div className="flex flex-col items-center gap-4 pt-5 lg:flex-row lg:p-0">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                href="/joinnow"
                className="flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-green-500 py-5 pl-9 pr-6 text-lg font-bold text-white"
              >
                <p className="">Join Now</p>
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
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                href="/about"
                className=" flex items-center justify-center rounded-full bg-gradient-to-tr py-5 pl-7 pr-4 text-lg font-bold ring-2 ring-zinc-400  "
              >
                <p className="">Learn More</p>
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
              </Link>
            </motion.div>
          </div>
        </div>
        <Image
          className="hidden rounded-full lg:block"
          height={500}
          width={500}
          alt=""
          src="https://thumbs.dreamstime.com/b/friends-doing-high-five-big-people-team-together-happy-friend-group-informal-greeting-command-motivation-vector-concept-166861902.jpg"
        />
      </main>
    </>
  );
};

export default Hero;

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
Image;

function Navbar() {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "COMMUNITY", link: "/community" },
    { name: "EVENTS", link: "/events" },
    { name: "CONTACT US", link: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0  z-50 border-b-[1px] border-zinc-200 bg-white">
      <div className=" mx-auto flex h-16 max-w-7xl items-center px-4 py-10 md:px-0">
        <Link href="/" className="flex-1 pr-12">
          <Image alt="logo" src="/GDSC_logo.png" height={400} width={400} />
        </Link>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="mr-1 h-7 w-7 cursor-pointer text-zinc-500 md:hidden"
        >
          {!open ? (
            <svg
              className="h-8 w-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        {/* linke items */}
        <ul
          className={`absolute left-0 z-50 flex w-full flex-col gap-y-10 bg-white py-20 transition-all duration-300 ease-in md:static md:w-auto   md:flex-row md:items-center md:py-0 ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="flex justify-center text-xl font-semibold md:my-0 md:ml-14"
            >
              <Link
                key={index}
                onClick={() => setOpen((prev) => !prev)}
                href={link.link}
                className="text-zinc-600 duration-200 hover:text-zinc-800"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

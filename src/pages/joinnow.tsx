import Link from "next/link";
import React from "react";

function joinnow() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <h1 className="mb-8 text-5xl font-bold text-zinc-800">
        Thank You for Joining GDSC JGEC !!!
      </h1>
      <Link
        href="/"
        className="rounded-lg bg-gradient-to-tr from-blue-500 to-green-500 px-5 py-3 text-lg font-bold text-white md:ml-12"
      >
        <p>Back to Home</p>
      </Link>
    </div>
  );
}

export default joinnow;

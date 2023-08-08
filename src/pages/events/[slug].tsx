import { useRouter } from "next/router";
import React from "react";
import { Data } from "@/data/eventsdata";
import Image from "next/image";

function Slug() {
  const { query } = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = Data[parseInt(query.slug)];
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl font-bold text-zinc-700 lg:text-5xl">
        {data?.title}
      </h1>
      <Image
        src={data?.image ?? ""}
        height={300}
        width={300}
        alt=""
        className="rounded-full"
      />
      <p className="text-sm text-zinc-500">{data?.date}</p>
      <p className="text-center font-bold text-zinc-600">{data?.content}</p>
    </div>
  );
}

export default Slug;

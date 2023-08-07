import { useRouter } from "next/router";
import React from "react";

function Slug() {
  const { query } = useRouter();
  return <div>{query.slug}</div>;
}

export default Slug;

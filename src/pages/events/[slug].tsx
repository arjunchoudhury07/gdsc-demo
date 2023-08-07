import { useRouter } from "next/router";
import React from "react";

function slug() {
  const { query } = useRouter();
  return <div>{query.slug}</div>;
}

export default slug;

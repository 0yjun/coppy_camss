import { useEffect } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function SsrTest() {
  return <div>hello</div>;
}
export async function getStaticProps() {
  const { data, error } = useSWR("comn/comncd", fetcher);
  return {
    props: {
      data,
    },
  };
}

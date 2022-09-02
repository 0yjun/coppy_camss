import React, { forwardRef, ReactPropTypes, useEffect } from "react";
import useSWR from "swr";
import client from "../lib/client";
import fetcher from "../lib/fetcher";
type ComboType = {
  url: string;
  mode?: "a" | "s";
};

const Combo = forwardRef(
  (props: ComboType, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const { url, mode } = props;
    const { data, error } = useSWR(url, fetcher);

    useEffect(() => {
      console.log(data);
    }, [data]);
    return (
      <select>
        {mode === "a" && <option>전체</option>}
        {data &&
          data.map((item: any, index: number) => (
            <option value={item.cd} key={index}>
              {item.cdNm}
            </option>
          ))}
      </select>
    );
  }
);
export default Combo;

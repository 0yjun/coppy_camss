import React, { forwardRef, ReactPropTypes, useEffect } from "react";
import useSWR from "swr";
import client from "../lib/client";
import fetcher from "../lib/fetcher";
type ComboType = {
  url: string;
  mode?: "a" | "s";
};

const SearchBar = (props: any) => {
  console.log("children", props.children);
  const onSearch = (e: any) => {};
  return (
    <form>
      {props.children}
      <button type="submit" onClick={onSearch}>
        search
      </button>
    </form>
  );
};
export default SearchBar;

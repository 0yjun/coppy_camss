import React, { forwardRef, ReactPropTypes, useEffect } from "react";
import useSWR from "swr";
import client from "../lib/client";
import fetcher from "../lib/fetcher";
type ComboType = {
  url: string;
  mode?: "a" | "s";
};

const SearchBar = (props: any) => {
  const { children } = props;

  const onSearch = (e: any) => {
    e.preventDefault();
  };
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

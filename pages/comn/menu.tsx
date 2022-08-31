import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import Combo from "../../component/combo";
import SearchBar from "../../component/SearchBar";
import client from "../../lib/client";
import fetcher from "../../lib/fetcher";
import { DataSet } from "../DataSet";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [url, setUrl] = useState("comn/comncd");
  const changeUrl = () => {
    setUrl("test");
  };
  return (
    <div>
      <button onClick={changeUrl}>chnage</button>
      <SearchBar>
        <Combo url={url} mode="a" />
      </SearchBar>
    </div>
  );
};

export default Home;

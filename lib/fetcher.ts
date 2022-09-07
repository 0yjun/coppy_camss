import axios from "axios";
import client from "./client";

const fetcher = (url: string) => client.get(url).then((res) => res.data);

export default fetcher;

export const fetcherPost = (url: string) =>
  client.post(url).then((res) => res.data);

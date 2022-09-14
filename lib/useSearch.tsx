import useSWR from "swr";
import fetcher from "./fetcher";

function useSearch(path: string | undefined) {
  const { data, error, mutate } = useSWR(path ? path : null, fetcher);

  return { data, isLoading: !error && !data, isError: error, mutate };
}

export default useSearch;

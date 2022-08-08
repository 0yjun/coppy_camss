import fetch from '../api/fetch';
import useSWR from 'swr';

export const useData = (path: string, param = {}) => {
  const { data, error } = useSWR(`path`, fetch);
  return { data: data, lsLoading: !error && !data, isError: error };
};

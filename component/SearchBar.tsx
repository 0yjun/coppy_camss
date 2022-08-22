import { Button } from 'antd';
import axios from 'axios';
import { useRef } from 'react';

const SearchBar = ({ children }: any) => {
  const searchBarRef = useRef<any>(null);
  const fn_search = async (e: any) => {
    searchBarRef.current.focus();

    const childrenNodes = searchBarRef.current.children;
    let option: any = {};
    let string: string = '';
    for (let item of childrenNodes) {
      if (item.value) {
        option[item.id] = item.value;
        string += `${item.id}:${item.value}$&&`;
      }
    }

    console.log(option);
    axios.defaults.baseURL = 'http://localhost:4000';
    axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    return axios.post(`/comn/comncode/`, option);
  };
  return (
    <>
      <div style={{ border: '2px solid red' }} ref={searchBarRef}>
        {children}
      </div>
      <Button onClick={fn_search}>조회</Button>
    </>
  );
};

export default SearchBar;

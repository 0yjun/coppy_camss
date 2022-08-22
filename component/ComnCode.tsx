import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button, Table } from 'antd';
import { Col, Row } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Combo from '../src/lib/hook/Combo';
import SearchBar from './SearchBar';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
const ComnCode = () => {
  // option 1: use the API
  const ref = useRef(null);
  const { pathname } = useLocation();
  console.log('url : ', pathname);
  const getAxios = () => {
    let data = [
      { cd: '1', upCd: '2' },
      { cd: '1', upCd: '2' },
    ];
    axios.defaults.baseURL = 'http://localhost:4000';
    axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
    axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
    return axios.post('/comn/comncode', { data });
  };

  return (
    <>
      <Button onClick={getAxios}>axios done</Button>
      <Combo ref={ref} url={pathname}></Combo>
      <SearchBar>
        <input id="cd" value="1" />
        <input id="upCd" value="2" />
        <div id="test3">hello3</div>
      </SearchBar>
    </>
  );
};

export default ComnCode;

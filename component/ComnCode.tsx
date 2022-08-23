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
  let [data, setData] = useState([{ id: '1' }]);
  useEffect(() => {
    console.log('data check ', data);
  }, [data]);
  return (
    <>
      <Combo ref={ref} url={pathname}></Combo>
      <SearchBar setData={setData}>
        <input id="cd" value="usr01" />
        <input id="upCd" value="2" />
        <div id="test3">hello3</div>
      </SearchBar>
    </>
  );
};

export default ComnCode;

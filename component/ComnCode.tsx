import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import client from 'lib/api/client';
import { Button, Table } from 'antd';
import { Col, Row } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Combo from '../src/lib/hook/Combo';
const ComnCode = () => {
  // option 1: use the API
  const ref = useRef(null);
  return (
    <>
      <Combo ref={ref} url="hello"></Combo>
    </>
  );
};

export default ComnCode;

import fetch from '../src/lib/api/fetch';
import useSWR from 'swr';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import client from 'lib/api/client';
import { Button, Table } from 'antd';
import { useData } from '../src/lib/hook/useSWR';
import CostomTable from './CostomTable';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'rowtype',
    dataIndex: 'rowtype',
    key: 'rowtype',
  },
];

const ComnCode = () => {
  const data1 = [
    { id: '1', rowtype: '2' },
    { id: '2', rowtype: '2' },
  ];
  const data2 = [
    { id: 'hello', rowtype: '2' },
    { id: 'wold', rowtype: '2' },
  ];
  const [dataSource1, setDataSource1] = useState(data1);
  const [dataSource2, setDataSource2] = useState(data2);
  const onAdd = e => {
    setDataSource1([...dataSource1, { rowtype: '2' }]);
  };

  const onRowPosChange = () => {
    console.log('this', this.rowposition);
  };
  const highFunction = text => {
    console.log(text);
  };
  const tableRef = useRef();
  return (
    <div>
      <CostomTable
        tableRef={tableRef}
        onRowPosChange={onRowPosChange}
        propFunction={highFunction}
        onAdd={onAdd}
        dataSource={dataSource1}
      ></CostomTable>
      <CostomTable onAdd={onAdd} dataSource={dataSource2}></CostomTable>
    </div>
  );
};

export default ComnCode;

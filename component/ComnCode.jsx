import { Button, Table } from 'antd';
import React, { Component, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { UserService } from '../src/service/userService';
import { DatasetService } from '../src/service/datasetService';
import { AppDispatch } from '../src/store';
import { useAppSelector } from '../src/store/hook';
import { datasetSlice } from '../src/store/slice/datasetSlice';

const ComnCode = () => {
  const { data, dataLoading } = useAppSelector(state => state.dataset);

  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(DatasetService.onSearch({ url: 'comncode/dataset' }));
  };
  const onSearch2 = () => {
    dispatch(DatasetService.onSearch({ url: 'comncode/dataset2' }));
  };
  const onAdd = () => {
    dispatch(datasetSlice.actions.onAdd());
  };
  useEffect(() => {
    console.log('data  ', data);
  }, [data]);

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
  return (
    <div>
      <Button onClick={onSearch}>data</Button>
      <Button onClick={onSearch2}>data2</Button>
      <Button onClick={onAdd}>add</Button>
      {data && data.map((v, i) => <div>{v.id}</div>)}
      {data && (
        <Table
          rowKey="uid"
          dataSource={data}
          columns={columns}
          loading={dataLoading}
        />
      )}
    </div>
  );
};

export default ComnCode;

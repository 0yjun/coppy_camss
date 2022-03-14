import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AppLayout from '../component/AppLayout';
import Table from '../component/Table';
import faker, { Faker } from '@faker-js/faker';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
function comncode() {
  const columns = useMemo(() => [
    {
      accessor: 'rowIdx',
      Header: 'RowIdx',
    },
    {
      accessor: 'rowType',
      Header: 'RowType',
    },
  ]);
  const comnCode = useSelector(state => state.common.data);
  for (let key in comnCode[comnCode.length - 1]) {
    console.log(key);
    columns.push({
      accessor: key,
      Header: key,
    });
  }

  return (
    <AppLayout>
      <Table columns={columns} data={comnCode} />
    </AppLayout>
  );
}

export default comncode;

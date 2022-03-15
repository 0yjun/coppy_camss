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
      type: 'text',
    },
    {
      accessor: 'rowType',
      Header: 'RowType',
      type: 'text',
    },
  ]);
  const comnCode = useSelector(state => state.common.data);
  const props = useSelector(state => state.common.props);
  console.log(props);
  for (let key in props) {
    console.log(props[key].cd);
    columns.push({
      accessor: props[key].cd,
      Header: props[key].cd,
      type: props[key].type,
    });
  }

  return (
    <AppLayout>
      <Table columns={columns} data={comnCode} />
    </AppLayout>
  );
}

export default comncode;

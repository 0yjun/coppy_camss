import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AppLayout from '../component/AppLayout';
import Table from '../component/Table';
import faker, { Faker } from '@faker-js/faker';
import ButtonGroup from 'antd/lib/button/button-group';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

function comncode() {
  const dispatch = useDispatch();
  const common = useSelector(state => state.common);
  console.log('common is ', common);
  const { data: comnCdMainData, props: comnCdMainProps } = useSelector(state => state.common);
  const comnCdMainColumn = [];
  for (let key in comnCdMainProps) {
    console.log(comnCdMainProps[key].cd);
    comnCdMainColumn.push({
      accessor: comnCdMainProps[key].cd,
      Header: comnCdMainProps[key].cd,
      type: comnCdMainProps[key].type,
    });
  }

  const { data: comnCdDetailData, props: ccomnCdDetailProps } = useSelector(state => state.common);
  const comnCdDetailColumn = [];
  for (let key in ccomnCdDetailProps) {
    console.log(ccomnCdDetailProps[key].cd);
    comnCdDetailColumn.push({
      accessor: ccomnCdDetailProps[key].cd,
      Header: ccomnCdDetailProps[key].cd,
      type: ccomnCdDetailProps[key].type,
    });
  }

  return (
    <AppLayout>
      <Table columns={comnCdMainColumn} data={comnCdMainData} name="ComnCdM" />
      <Table columns={comnCdDetailColumn} data={comnCdDetailData} name="ComnCdM" />
    </AppLayout>
  );
}

export default comncode;

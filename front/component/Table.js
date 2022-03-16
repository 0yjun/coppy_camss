import faker from '@faker-js/faker';
import { Button, Input } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from 'react-table';
import styled from 'styled-components';
import { comnAdd, comnChange, comnFindRequest, comnSaveRequest } from '../module/slice/common';
import TableScrollbar from 'react-table-scrollbar';

function Table(props) {
  const { data, columns, name } = props;
  const dispatch = useDispatch();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
  );

  const onAdd = () => {
    dispatch(comnAdd());
  };
  const comnFind = () => {
    console.log(name);
    dispatch(comnFindRequest(name));
  };
  const comnSave = () => {
    console.log(name);
    dispatch(comnSaveRequest({ name: name, data: data }));
  };

  const onChange = useCallback((e, cell) => {
    console.log('e : ', e.target.value);
    dispatch(comnChange({ value: e.target.value, cell: cell }));
  });
  return (
    <>
      <ButtonGroup>
        <Button onClick={onAdd}>생성</Button>
        <Button onClick={comnFind}>조회</Button>
        <Button onClick={comnSave}>저장</Button>
      </ButtonGroup>

      <TableScrollbar height="200px">
        <table {...getTableProps()}>
          <thead style={{ backgroundColor: 'gray' }}>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>
                        <Input
                          type={cell.column.type}
                          onChange={e => onChange(e, cell)}
                          readOnly={['rowIdx', 'rowType'].includes(cell.column.Header)}
                          value={cell.column.Header === 'rowIdx' ? cell.row.id : cell.value}></Input>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableScrollbar>
    </>
  );
}

export default Table;

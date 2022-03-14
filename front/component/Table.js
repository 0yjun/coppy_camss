import faker from '@faker-js/faker';
import { Button, Input } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useGlobalFilter, useSortBy, useRowSelect } from 'react-table';
import { comnAdd, comnChange } from '../module/slice/common';

function Table({ data, columns }) {
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState(data);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
  );

  const onInsert = () => {
    dispatch(comnAdd());
  };
  const onClick = cell => {
    console.log('onclick run row', cell.row.id);
  };
  useEffect(() => {}, []);
  const onChange = useCallback((e, cell) => {
    console.log('e : ', e.target.value);
    dispatch(comnChange({ value: e.target.value, cell: cell }));
  });
  return (
    <>
      <ButtonGroup>
        <Button onClick={onInsert}>생성</Button>
      </ButtonGroup>
      <table {...getTableProps()}>
        <thead>
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
                    <td onClick={() => onClick(cell)} {...cell.getCellProps()}>
                      <Input
                        onChange={e => onChange(e, cell)}
                        readOnly={['RowIdx', 'RowType'].includes(cell.column.Header)}
                        value={cell.column.Header === 'RowIdx' ? cell.row.id : cell.value}></Input>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;

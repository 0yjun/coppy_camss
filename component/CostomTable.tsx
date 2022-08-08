import { Button } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
interface TableProps {
  onAdd: Function;
  dataSource: Array<object>;
  onRowPosChange: Function;
  propFunction: Function;
}

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
  td {
    padding: 5px 10px;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

const CostomTable = ({ onAdd, dataSource, onRowPosChange }: TableProps) => {
  const onAddHandler = () => {
    console.log('type of onAdd : ', typeof onAdd);
    return onAdd();
  };
  const [rowposition, setRowposition] = useState(-1);

  const onrowclick = (rowIndex: any) => (e: any) => {
    if (rowposition !== rowIndex) {
      onRowPosChange();
      setRowposition(rowIndex);
    }
  };
  const onFocus = (rowIndex: any) => {
    return rowIndex == rowposition;
  };
  const setRowpos = (rowIndex: number) => {
    setRowposition(rowIndex);
  };
  return (
    <>
      {onAdd && <Button onClick={onAddHandler}>onadd</Button>}
      <StyledTable>
        {dataSource &&
          dataSource.map((v, i) => (
            <tr
              onFocus={onFocus}
              style={{ color: i === rowposition ? 'red' : 'black' }}
              key={i}
              onClick={onrowclick(i)}
            >
              {Object.values(v).map((v, i) => (
                <td>{v}</td>
              ))}
            </tr>
          ))}
      </StyledTable>
    </>
  );
};

export default CostomTable;

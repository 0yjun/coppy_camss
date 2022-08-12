import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import client from 'lib/api/client';
import { Button, Table } from 'antd';
import { Col, Row } from 'antd';

import CostomTable from './CostomTable';
import Dataset from './Table/Dataset';
import Aggrid from './Table/Aggrid';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ComnCode = () => {
  const gridRef1 = useRef(); // Optional - for accessing Grid's API
  const gridRef2 = useRef();
  const [mainRowData, setmainRowData] = useState([
    { make: '1' },
    { make: '1' },
    { make: '1' },
    { make: '1' },
    { make: '1' },
  ]); // Set mainRowData to Array of Objects, one Object per Row
  const [subRowData, setSubRowData] = useState();
  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price' },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  // Example of consuming Grid Event
  const cellClickedListener = useCallback(event => {
    console.log('cellClicked', event);
  }, []);

  // Example load data from sever
  useEffect(() => {}, []);

  // Example using Grid's API
  const addMainBtnListener = useCallback(e => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(mainRowData => {
        console.log('mainRowdata ', mainRowData);
        return setmainRowData(mainRowData);
      });
  }, []);
  const deleteMainBtnListener = useCallback(e => {
    console.log('delete main click');
    gridRef1.current.api.deselectAll();
    console.log(gridRef1.current.api);
  }, []);

  const addSubBtnListener = useCallback(e => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(subRowData => {
        console.log('subRowData ', subRowData);
        return setSubRowData(subRowData);
      });
  }, []);
  const deleteSubBtnListener = useCallback(e => {
    console.log('delete sub click');
    gridRef2.current.api.deselectAll();
  }, []);

  // gets called once, no dependencies, loads the grid data
  return (
    <>
      <button onClick={addMainBtnListener}>Push Me</button>
      <button onClick={deleteMainBtnListener}>Push Me</button>
      <div style={{ height: 'calc(100% - 25px)' }} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef1} // Ref for accessing Grid's API
          rowData={mainRowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
        height
      </div>

      <button onClick={addSubBtnListener}>add sub</button>
      <button onClick={deleteSubBtnListener}>delete sub</button>
      <div style={{ height: 'calc(100% - 25px)' }} className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef2} // Ref for accessing Grid's API
          rowData={subRowData} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </>
  );
};

export default ComnCode;

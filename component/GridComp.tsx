import { IDatasource } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
type GridCompType = {
  columnDefs: Array<object>;
  dataSource: any;
  defaultColGroupDef: any;
};

const GridComp = (props: GridCompType) => {
  const { columnDefs, dataSource, defaultColGroupDef } = props;
  const dataset = useSelector((state: any) => state.dataset);
  const { data } = dataset;
  console.log("comp data ", data);
  return (
    <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
      <AgGridReact
        treeData={true}
        animateRows={true}
        rowData={data}
        defaultColGroupDef={defaultColGroupDef}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default GridComp;

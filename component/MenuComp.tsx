import { AgGridReact } from "ag-grid-react";
import { Layout } from "antd";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const MenuComp = () => {
  const { data, error } = useSWR(
    "https://www.ag-grid.com/example-assets/olympic-winners.json",
    fetcher
  );

  const columnDefs = useMemo(
    () => [
      { field: "athlete", width: 150 },
      { field: "age", width: 90 },
      { field: "country", width: 150 },
      { field: "year", width: 90 },
      { field: "date", width: 150 },
      { field: "sport", width: 150 },
      { field: "gold", width: 100 },
      { field: "silver", width: 100 },
      { field: "bronze", width: 100 },
      { field: "total", width: 100 },
    ],
    []
  );
  return (
    <div style={{ height: "100vh" }}>
      <AgGridReact rowData={data} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};
export default MenuComp;

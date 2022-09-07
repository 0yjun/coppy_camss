import { AgGridReact } from "ag-grid-react";
import { Layout } from "antd";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const MenuComp = () => {
  const { data, error } = useSWR("/comn/comncd", fetcher);

  const columnDefs = useMemo(
    () => [
      { field: "cd", width: 150, name: "상위코드" },
      { field: "cdNm", width: 150, name: "코드명" },
    ],
    []
  );
  return (
    <div style={{ height: "100vh", border: "1px solid gray" }}>
      <AgGridReact rowData={data} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};
export default MenuComp;

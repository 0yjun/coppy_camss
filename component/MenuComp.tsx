import { AgGridReact } from "ag-grid-react";
import { Layout } from "antd";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const MenuComp = ({ props }: any) => {
  const { setData } = props; /**데이터를 저장할 함수 */
  return <div style={{ height: "100vh", border: "1px solid gray" }}></div>;
};
export default MenuComp;

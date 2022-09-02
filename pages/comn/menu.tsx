import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import useSWR from "swr";
import Combo from "../../component/combo";
import SearchBar from "../../component/SearchBar";
import client from "../../lib/client";
import fetcher from "../../lib/fetcher";
import { DataSet } from "../DataSet";
import styles from "../styles/Home.module.css";
import { AgGridReact } from "ag-grid-react";
const Menu: NextPage = () => {
  const [url, setUrl] = useState("comn/comncd");
  const changeUrl = (e: any) => {
    e.preventDefault();
    setUrl("test");
  };
  /**
   * ag-gird
   */
  const menuRef = useRef<AgGridReact>(null);
  const { data, error } = useSWR("comn/menu", fetcher);
  const columnDefs = [{ field: "menuId" }, { field: "menuLvl" }];
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: "Organisation Hierarchy",
      minWidth: 300,
      cellRendererParams: {
        suppressCount: true,
      },
    };
  }, []);

  useEffect(() => {
    console.log("data : ", data);
    console.log();
  }, [data]);
  const getMenuDepth = useMemo(() => {
    return (data: any) => data.menuLvl;
  }, []);

  return (
    <div>
      <SearchBar>
        <button onClick={changeUrl} value="test">
          chnage
        </button>
        <Combo url={url} mode="a" />
      </SearchBar>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          ref={menuRef}
          rowData={data}
          animateRows={true}
          groupDefaultExpanded={-1}
          columnDefs={columnDefs}

          //getDataPath={getMenuDepth}
        />
      </div>
    </div>
  );
};

export default Menu;

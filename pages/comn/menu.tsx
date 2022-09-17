import { Button, Form, Input, Layout, Radio, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";

import AppLayout from "component/AppLayout";
import Splitter from "../../component/Splitter";
import MenuComp from "../../component/MenuComp";
import { useRef, useState } from "react";
import useData from "../../lib/useSearch";
import useSearch from "../../lib/useSearch";
import SearchArea from "../../component/SearchArea";
import { text } from "stream/consumers";
import { AgGridReact } from "ag-grid-react";
const Menu = () => {
  const [mainPos, setMainPos] = useState(null);
  const [subPos, setSubPos] = useState(null);
  const { data: data, isLoading, isError } = useSearch("comn/comncode");

  const mainGridRef = useRef<AgGridReact>(null);
  const mainColumnDef = [
    { field: "cd", minWidth: 150 },
    { field: "upCd", minWidth: 150 },
    { field: "cdNm", minWidth: 150 },
  ];
  return (
    <div style={{ bottom: "0" }}>
      <AppLayout>
        <Button type="primary">primary</Button>
        <SearchArea
          row={[
            [
              { name: "test", type: "date", required: "true" },
              { name: "text" },
            ],
          ]}
        ></SearchArea>
        <ReflexContainer
          orientation="vertical"
          style={{ border: "1px solid red", height: "100vh" }}
        >
          <ReflexElement>
            <AgGridReact
              ref={mainGridRef}
              rowData={data}
              columnDefs={mainColumnDef}
              rowSelection={"single"}
            />
          </ReflexElement>
          <ReflexSplitter />
        </ReflexContainer>
      </AppLayout>
    </div>
  );
};

export default Menu;

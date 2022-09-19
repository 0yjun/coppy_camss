import { Button, Form, Input, Layout, Radio, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { onSearch } from "reducers/actions/dataset";
import { useCallback, useEffect, useMemo } from "react";
import GridComp from "component/GridComp";

const Menu = () => {
  const dispatch = useDispatch<any>();
  const dataset = useSelector((state: any) => state.dataset);
  const dataset2 = useSelector((state: any) => state.dataset);
  const { data: data1 } = dataset;
  const { data: data2 } = dataset2;

  const fnSearch = useCallback((e: any) => {
    e.preventDefault();
    dispatch(onSearch({ path: "comn/comncode" }));
  }, []);
  useEffect(() => {
    console.log("data1 ", data1);
  }, [data1]);
  const defaultColGroupDef = useMemo(() => {
    return {
      upCd: true,
    };
  }, []);
  return (
    <div>
      <Button onClick={fnSearch}>search</Button>
      <GridComp
        dataSource={data1}
        defaultColGroupDef={defaultColGroupDef}
        columnDefs={[
          { field: "cd", filter: "agDateColumnFilter" },
          { field: "upCd", filter: "agTextColumnFilter" },
          { field: "cdNm" },
        ]}
      />
    </div>
  );
};

export default Menu;

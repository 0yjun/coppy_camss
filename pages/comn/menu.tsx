import { Button, Form, Input, Layout, Radio, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import AppLayout from "../../component/AppLayout";
import Splitter from "../../component/Splitter";
import MenuComp from "../../component/MenuComp";
import { useRef, useState } from "react";
import useData from "../../lib/useSearch";
import useSearch from "../../lib/useSearch";
import SearchArea from "../../component/SearchArea";
import { text } from "stream/consumers";
const Menu = () => {
  const [mainPos, setMainPos] = useState(null);
  const [subPos, setSubPos] = useState(null);
  const { data: test, isLoading, isError } = useSearch("comn/comncd");
  console.log("test is ", test);
  const formRef = useRef(null);

  return (
    <div style={{ bottom: "0" }}>
      <AppLayout>
        <Button type="primary">primary</Button>
        <SearchArea
          row={[
<<<<<<< HEAD
            ["hello", ["hello", "1wold"]],
            ["hello", "wolds", "hello"],
=======
            [
              { name: "test", type: "input", required: "true" },
              { name: "text" },
            ],
            [{ name: "text" }, { name: "text" }, { name: "text" }],
>>>>>>> 8749433e501fdf5149492a31abd04d6fac7f5daf
          ]}
        ></SearchArea>
        <Splitter
          firstComponent={<MenuComp />}
          secondComponent={<div>right</div>}
          maxSize={[1000, 1000]}
          minSize={[100, 100]}
          orientation="vertical"
        />
      </AppLayout>
    </div>
  );
};

export default Menu;

import { Layout } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import AppLayout from "../../component/AppLayout";
import Splitter from "../../component/Splitter";
import MenuComp from "../../component/MenuComp";
const Menu = () => {
  return (
    <div style={{ bottom: "0" }}>
      <AppLayout>
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

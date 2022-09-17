import { Button, Form, Input, Layout, Radio, Row } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Menu = () => {
  const { users } = useSelector((state: any) => state.users);
  console.log("users : ", users);
  return <div></div>;
};

export default Menu;

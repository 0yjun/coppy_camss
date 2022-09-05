import { PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useState } from "react";

/**
 * 메뉴 상단바
 * * @param children : 하위 컴포넌트
 * * Memo : 메뉴 리스트는 벡엔드에서 받아오지만 아직 구현되지 않은 관계로
 * 하드코딩 입력함
 */
const AppLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getitem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem => ({ key, icon, label, type } as MenuItem);

  type MenuItem = Required<MenuProps>["items"][number];
  const items: MenuItem[] = [getitem("option1", "1", <PieChartOutlined />)];
  return (
    <>
      <Menu
        mode="horizontal"
        theme="dark"
        items={items}
        style={{ border: "1px solid gray" }}
      />
      {children}
    </>
  );
};
export default AppLayout;

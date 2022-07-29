import { Menu } from 'antd';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
  const { userData } = useSelector(state => state.user);

  const menuItems = [
    {
      label: <Link to="/">등록</Link>,
      key: 'main',
      category: 'insert',
      menuNm: '등록',
    },
    {
      label: <Link to="/main2">Coppy Camss</Link>,
      key: 'main2',
      category: 'insert',
    },
    {
      label: <Link to="/main3">Coppy Camss</Link>,
      key: 'main3',
    },
  ];
  return (
    <div>
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        {menuItems.map((v, i) => (
          <Menu.Item key={v.key}>{v.category}</Menu.Item>
        ))}
      </Menu>
      {children}
    </div>
  );
};

export default Navbar;

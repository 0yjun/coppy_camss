import { Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
  const { userData } = useSelector(state => state.user);

  const menuItems = [
    {
      label: <Link to="/">Coppy Camss</Link>,
      key: 'main',
    },
  ];
  return (
    <div>
      <Menu items={menuItems} mode="inline" />
      {children}
    </div>
  );
};

export default Navbar;

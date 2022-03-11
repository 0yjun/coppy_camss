import React, { useEffect, useState } from 'react';
import useInput from '../hooks/useInput';
import { Menu, Input, Row, Col, Button } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';

const AppLayout = ({ children }) => {
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    console.log(me);
  }, []);

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="/">
          <Link href="/">
            <a>COPPY_CAMSS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="/post">
          <Link href="/post">
            <a>섭외등록</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="list">
          <Link href="/list">
            <a>섭외조회</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="statistics">
          <Link href="/statistics">
            <a>섭외통계</a>
          </Link>
        </Menu.Item>
        <SubMenu key="setting" icon={<SettingOutlined />} title="설정">
          <Menu.Item key="1">
            <Link href="/comncode">
              <a>공통코드</a>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={4}></Col>
        <Col xs={24} md={16}>
          {children}
        </Col>
        <Col xs={24} md={4} />
      </Row>
      <Footer>
        <a href="https://camss.cfcenter.co.kr/user/login/" target="_blank" rel="noreferrer noopener">
          Made by CAMSS
        </a>
      </Footer>
    </>
  );
};

export default AppLayout;

import { Button, Form, Input } from "antd";
import client from "lib/client";
import { format } from "path";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, signInAction } from "reducers/actions/users";

const Auth = (props: any) => {
  const users = useSelector((state: any) => state.users);
  const { user, isSignError } = users;
  const dispatch = useDispatch<any>();
  const onSubmit = (values: any) => {
    dispatch(signInAction(values));
    console.log("user : ", user);
  };
  useEffect(() => {
    dispatch(getUser());
    console.log("user : ", user);
  }, []);
  return (
    <Form onFinish={onSubmit}>
      <Form.Item
        label="username"
        name="userId"
        rules={[{ required: true, message: "please input your username!" }]}
      >
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item
        label="부서명"
        name="deptCd"
        rules={[{ required: true, message: "please input your username!" }]}
      >
        <Input placeholder="username" />
      </Form.Item>
      <Form.Item
        label="유저명"
        name="userNm"
        rules={[{ required: true, message: "please input your username!" }]}
      >
        <Input placeholder="user name" />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: "please input your username!" }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item
        label="password-check"
        name="password-check"
        rules={[{ required: true, message: "please input your username!" }]}
      >
        <Input.Password placeholder="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
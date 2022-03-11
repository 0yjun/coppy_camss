import Head from 'next/head';
import React from 'react';
import AppLayout from '../component/AppLayout';
import { useDispatch } from 'react-redux';
import AuthForm from '../component/AuthForm';

const auth = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <AppLayout>
      <Head>
        <title>login</title>
      </Head>
      <AuthForm type="login"></AuthForm>
    </AppLayout>
  );
};

export default auth;

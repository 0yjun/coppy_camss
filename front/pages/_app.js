import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>COPPY_CAMSS</title>
      </Head>
      <Component />
    </>
  );
};
MyApp.prototypes = {
  Component: Proptypes.elementType.isRequired,
};

export default wrapper.withRedux(MyApp);

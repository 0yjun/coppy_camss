import AuthForm from '../component/AuthForm';
import React, { ReactChild, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface AuxProps {
  children: ReactNode;
}
const Setting = ({ children }: AuxProps) => {
  const { userData, loginLoading } = useSelector((state: any) => state.user);
  useEffect(() => {
    console.log('userData(setting) : ', userData);
  }, [userData]);

  return <>{!userData ? children : <AuthForm />}</>;
};
export default Setting;

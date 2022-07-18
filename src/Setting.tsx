import React, { ReactChild, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface AuxProps {
  children: ReactNode;
}
const Setting = ({ children }: AuxProps) => {
  const { userData, log } = useSelector((state: any) => state.user);
  useEffect(() => {
    console.log('settingt sx : ', email);
  }, [email]);
  return <>{children}</>;
};
export default Setting;

import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const { userData } = useSelector((state: any) => state.user);
  let bool = false;
  useEffect(() => {
    bool = !!userData;
    console.log(' bool = !!userData; ', (bool = !!userData));
  }, [userData]);
  console.log('in isadmin useData : ', userData, 'bool : ', bool);
  return [userData, bool];
};

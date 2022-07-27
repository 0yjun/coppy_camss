import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const { userData } = useSelector((state: any) => state.user);
  return Object.keys(userData).length > 0;
};

import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useReducer } from 'react';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest } from '../module/slice/user';
import AppLayout from '../component/AppLayout';

export default function Home() {
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();

  const login = useCallback(data => {
    dispatch(loginRequest(data));
  }, []);

  useEffect(() => {
    console.log('user', users);
  }, [users]);
  return (
    <AppLayout>
      <button onClick={login}>login</button>
    </AppLayout>
  );
}

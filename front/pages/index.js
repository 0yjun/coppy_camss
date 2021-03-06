import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useReducer } from 'react';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest } from '../module/slice/user';
import AppLayout from '../component/AppLayout';
import Router from 'next/router';

export default function Home() {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!me) {
      Router.replace('/login');
    }
  }, [me]);

  return <AppLayout></AppLayout>;
}

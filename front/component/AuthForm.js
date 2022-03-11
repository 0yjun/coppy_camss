import { Button, Checkbox, Form, Input } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import AppLayout from './AppLayout';
import styled from 'styled-components';
import { loginRequest, signUpRequest } from '../module/slice/user';
import { Footer } from 'antd/lib/layout/layout';

const AuthForm = ({ type }) => {
  const EerrorMessage = styled.div`
    color: red;
  `;
  const textMap = { login: '로그인', signup: '회원가입' };
  const text = textMap[type];

  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onchangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { signUpLoading, signUpDone, signUpError, me, logInError, logInLoading } = useSelector(state => state.user);

  const onChangephoneNumber = useCallback(
    e => {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(e.target.value)) {
        if (e.target.value.length < 10) {
          setPhoneNumber(e.target.value.replace(/-/g, ''));
        } else if (e.target.value.length >= 10 && e.target.value.length < 13) {
          setPhoneNumber(e.target.value.replace(/-/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        } else {
          setPhoneNumber(e.target.value.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
      }
    },
    [phoneNumber],
  );

  const onChangePasswordChk = useCallback(
    e => {
      setPasswordChk(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );
  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (type === 'login') {
      dispatch(loginRequest({ email: email, password: password }));
    } else {
      if (password !== passwordChk) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      dispatch(signUpRequest({ email: email, password: password }));
    }
  }, [email, password, passwordChk, term]);

  return (
    <>
      <Head>
        <title>{type}</title>
      </Head>
      <Form onFinish={onSubmit}>
        <h3>{text}</h3>
        <div>
          <label htmlFor="user-email">email</label>
          <br />
          <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="password">비멀번호</label>
          <br />
          <Input name="password" type="password" value={password} onChange={onChangePassword} required />
        </div>
        {type === 'signup' && (
          <>
            <div>
              <label htmlFor="passwordChk">비밀번호확인</label>
              <br />
              <Input
                name="passwordChk"
                type="password"
                value={passwordChk}
                required
                onChange={onChangePasswordChk}></Input>
              {passwordError && <EerrorMessage>비밀번호가 일치하지 않습니다.</EerrorMessage>}
            </div>
            <div>
              <label htmlFor="phoneNumber">전화번호</label>
              <br />
              <Input
                name="phoneNumber"
                type="tel"
                value={phoneNumber}
                required
                onChange={onChangephoneNumber}
                placeholder="00*-000*-0000"
                pattern="/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/"
                maxLength="13"></Input>
            </div>
            <div>
              <label htmlFor="nickname">닉네임</label>
              <br />
              <Input name="nickname" type="text" value={nickname} required onChange={onchangeNickname}></Input>
            </div>
            <div>
              <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                약관동의여부
              </Checkbox>
              {termError && <EerrorMessage>약관동의 필수.</EerrorMessage>}
            </div>
          </>
        )}
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          {text}
        </Button>
        <Footer>
          {type === 'login' ? (
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>로그인</a>
            </Link>
          )}
        </Footer>
      </Form>
    </>
  );
};

export default AuthForm;

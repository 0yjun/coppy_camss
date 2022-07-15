import styled from 'styled-components';
import { Button, Input, Form } from 'antd';
import useInput from '../src/lib/hook/useInput';
import { useDispatch } from 'react-redux';
import { UserService } from '../src/service/userService';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const AuthForm = () => {
  const { loginLoading, loginData, loginError } = useSelector(
    state => state.user,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = () => {
    console.log('onsubmit');
    dispatch(UserService.login({ email: email, password: password }));
  };

  useEffect(() => {
    if (!loginData) {
      navigate('/auth', { replace: true });
    }
  }, []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <h3>로그인</h3>
      <Input
        name="user-email"
        type="email"
        placeholder="email"
        value={email}
        onChange={onChangeEmail}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={onChangePassword}
        required
      />
      <Button type="primary" htmlType="submit" loading={loginLoading}>
        로그인
      </Button>
    </FormWrapper>
  );
};
export default AuthForm;

import styled from 'styled-components';
import { Button, Input, Form } from 'antd';
import useInput from '../src/lib/hook/useInput';
import { useDispatch } from 'react-redux';
import { UserService } from '../src/service/userService';
<<<<<<< HEAD
import StyledInput from '../src/lib/styledComponent/StyledInput';
import WhiteBox from '../src/lib/styledComponent/WhiteBox';
import TemplateBlock from '../src/lib/styledComponent/TemplateBlock';
=======
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

>>>>>>> 7f5a3d3c94cb8da1ea9d050ca54ef8c42ce8bed8
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
<<<<<<< HEAD
    <TemplateBlock>
      <WhiteBox>
        <FormWrapper onFinish={onSubmitForm}>
          <h3>로그인</h3>
          <StyledInput
            name="user-email"
            type="email"
            placeholder="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={onChangePassword}
            required
          />
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </FormWrapper>
      </WhiteBox>
    </TemplateBlock>
=======
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
>>>>>>> 7f5a3d3c94cb8da1ea9d050ca54ef8c42ce8bed8
  );
};
export default AuthForm;

import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
const ButtonWrapper = styled.div`
  margintop: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;

const AuthForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useInput('');
  const [password, onCahnge] = useInput('');

  return <div></div>;
};

export default AuthForm;

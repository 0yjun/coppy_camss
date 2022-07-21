import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { UserService } from './service/userService';
import { AppDispatch } from './store';
import AuthForm from '../component/AuthForm';
import { useSelector } from 'react-redux';
import isAdmin from './lib/hook/isAdmin';
import Navbar from '../component/Navbar';
const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loginData } = useSelector((state: any) => state.user);

  const getUser = async () => {
    dispatch(UserService.getUser('1'));
  };
  useEffect(() => {
    getUser();
  }, []);

  const { userData, loginLoading } = useSelector((state: any) => state.user);
  const [value, bool] = isAdmin();
  console.log('bool : ', bool);

  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
};
export default App;

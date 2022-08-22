import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { UserService } from './service/userService';
import { AppDispatch } from './store';
import AuthForm from '../component/AuthForm';
import { useSelector } from 'react-redux';
import isAdmin from './lib/hook/isAdmin';
import Navbar from '../component/Navbar';
import ComnCode from '../component/ComnCode';
import 'antd/dist/antd.css';
const App = ({ children }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { userData, loginLoading } = useSelector((state: any) => state.user);
  console.log(isAdmin());

  return (
    <BrowserRouter>
      <Navbar>{children}</Navbar>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/comn-code" element={<ComnCode />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

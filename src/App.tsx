import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { UserService } from './service/userService';
import { AppDispatch } from './store';
import AuthForm from '../component/AuthForm';
<<<<<<< HEAD
import Setting from './Setting';

=======
import { useSelector } from 'react-redux';
>>>>>>> 7f5a3d3c94cb8da1ea9d050ca54ef8c42ce8bed8
const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loginData } = useSelector((state: any) => state.user);

  const getUser = async () => {
    dispatch(UserService.getUser('1'));
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Setting>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </Setting>
  );
};
export default App;

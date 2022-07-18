import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserService } from './service/userService';
import { AppDispatch } from './store';
import AuthForm from '../component/AuthForm';
import Setting from './Setting';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getUser = async () => {
    dispatch(UserService.getUser('1'));
  };
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

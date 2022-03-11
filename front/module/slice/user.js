import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginDone: false,
  loginLoading: false, //로그인 시도중
  loginError: null,
  me: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginRequest: (state, data) => {
      state.loginLoading = true;
    },
    loginSuccess: (state, data) => {
      state.me = data.payload;
      state.loginLoading = false;
    },
    loginFailure: (state, data) => {
      state.loginError = payload;
      state.loginLoading = false;
    },
    logoutRequest: (state, data) => {
      state.data = payload;
      state.loginLoading = false;
    },
    logoutSuccess: (state, data) => {
      state.data = payload;
      state.loginLoading = false;
    },
    logoutFailure: (state, data) => {
      state.data = payload;
      state.loginLoading = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginRequest, loginSuccess, loginFailure, logoutRequest, logoutSuccess, logoutFailure } = actions;
export default reducer;

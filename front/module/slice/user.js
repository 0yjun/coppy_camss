import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginDone: false,
  loginLoading: false, //로그인 시도중
  loginError: null,
  /*signup */
  signUpDone: false,
  signUpLoading: false, //로그인 시도중
  signUpError: null,
  //me: { nickname: 'jun' },
  me: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    /* login */
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
    /* logout */
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
    /* signUp*/
    signUpRequest: (state, data) => {
      console.log('signUpRequest : ', data);
      state.signUpLoading = true;
      state.signUpDone = false;
      state.signUpError = null;
    },
    signUpSuccess: (state, data) => {
      console.log('signup success');
      state.signUpLoading = false;
      state.signUpDone = true;
      state.signUpError = null;
    },
    signUpFailure: (state, data) => {
      console.log('data', data, 'state', state);
      state.signUpLoading = false;
      state.signUpError = data;
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} = actions;
export default reducer;

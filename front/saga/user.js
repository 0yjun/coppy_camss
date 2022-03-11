import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { all, fork, delay, put, takeLatest, call } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  signUpSuccess,
  signUpFailure,
  signUpRequest,
} from '../module/slice/user';

function loginAPI(data) {
  return axios.post('user/login', data);
}

function* login(action) {
  try {
    console.log('action : ', action);
    const result = yield call(loginAPI, action.data);
    yield put(loginSuccess(result));
  } catch (e) {
    // 요청 실패시'
    console.error(e);
    yield put(loginFailure(e));
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    yield put(signUpSuccess(result));
  } catch (error) {
    console.error('error : ', error);
    yield put(signUpFailure(error));
  }
}

/*      [ PART 3 ]
        watch
*/
function* watchLogin() {
  yield takeLatest(loginRequest.type, login);
}

function* watchSignUp() {
  yield takeLatest(signUpRequest.type, signUp);
}

export default function* userSaga() {
  console.log('userSaga');
  yield all([fork(watchLogin), fork(watchSignUp)]);
}

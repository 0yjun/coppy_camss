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
} from '../module/slice/user';

function loginAPI(data) {
  return axios.post('api/login', data);
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.payload);
    yield put(loginSuccess(result));
  } catch (e) {
    // 요청 실패시'
    console.error(e);
    yield put(loginFailure(e));
  }
}

function* watchLogin() {
  yield takeLatest(loginRequest.type, login);
}

export default function* userSaga() {
  console.log('userSaga');
  yield all([fork(watchLogin)]);
}

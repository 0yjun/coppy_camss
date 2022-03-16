import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  comnFindFailure,
  comnFindRequest,
  comnFindSuccess,
  comnSaveRequest,
  comnSaveSuccess,
} from '../module/slice/common';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  signUpSuccess,
  signUpFailure,
  signUpRequest,
} from '../module/slice/user';

function comnFindAPI(data) {
  return axios.get(`common/${data}/comnFind`, data);
}

function* comnFind(action) {
  console.log('action : ', action);
  try {
    const result = yield call(comnFindAPI, action.payload);
    yield put(comnFindSuccess(result));
  } catch (e) {
    // 요청 실패시'
    console.error(e);
    yield put(comnFindFailure(e));
  }
}

function comnSaveAPI(data) {
  console.log('comnSaveAPI : ', data);
  return axios.post(`common/${data.name}/comnsave`, data);
}

function* comnSave(action) {
  try {
    const result = yield call(comnSaveAPI, action.payload);
    yield put(comnSaveSuccess(result));
  } catch (e) {
    // 요청 실패시'
    console.error(e);
    yield put(comnFindFailure(e));
  }
}

/*      [ PART 3 ]
        watch
*/
function* watchComnFind() {
  console.log('watchcomnfind call');
  yield takeLatest(comnFindRequest.type, comnFind);
}

function* watchComnSave() {
  yield takeLatest(comnSaveRequest.type, comnSave);
}

export default function* commonSaga() {
  console.log('comnsaga');
  yield all([fork(watchComnFind), fork(watchComnSave)]);
}

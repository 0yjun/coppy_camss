import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../module';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from '../saga';
import middlewhare from '../module/slice/middleware';

const createStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleWare, logger, middlewhare],
    devTools: process.env.NODE_ENV === 'development',
  });
  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};

const wrapper = createWrapper(createStore);
export default wrapper;

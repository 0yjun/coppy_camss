import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './slice/user';
import common, { getInitialState } from './slice/common';

const rootReducer = (state, action) => {
  console.log('reducer in root getInitialState : ', getInitialState);
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      const combineReducer = combineReducers({
        user,
        common,
      });
      return combineReducer(state, action);
  }
};

export default rootReducer;

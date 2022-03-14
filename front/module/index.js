import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './slice/user';
import common from './slice/common';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      const combineReducer = combineReducers({
        user: user,
        common: common,
      });
      return combineReducer(state, action);
  }
};

export default rootReducer;

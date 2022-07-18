import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './slice/user';
import common from './slice/common';
import commonMain from './slice/commonMain';

const rootReducer = (state, action) => {
  console.log('typeof common : ', typeof common);
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      const combineReducer = combineReducers({
        user,
        common: common,
      });
      return combineReducer(state, action);
  }
};

export default rootReducer;

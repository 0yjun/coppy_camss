import {HYDRATE} from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import users from './slice/user';

const rootReducer = (state, action)=>{
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default:
            const combineReducer = combineReducers({
                users : users
            })
            return combineReducer(state,action);
    }
}

export default rootReducer;
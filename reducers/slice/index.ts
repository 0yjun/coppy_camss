import { combineReducers, AnyAction } from "@reduxjs/toolkit";
import { hydrate } from "react-dom";
import { HYDRATE } from "next-redux-wrapper";
import users, { IUser } from "./users";
export interface State {
  /**todo */
  users: IUser;
}

const rootReducer = (state: State | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE");
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        users,
        /** todo redux */
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";
import { logInAction, logOutAction, signInAction } from "../actions/users";

export interface IUser {
  isLoggedIn: boolean;
  isSignIn: boolean;
  user: any;
  loggedInError: any;
}
const initialState: IUser = {
  isLoggedIn: false,
  isSignIn: false,
  user: null,
  loggedInError: null,
};

export const users = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logInAction.pending, (state, action) => {
        state.isLoggedIn = true;
      })
      .addCase(logInAction.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = action.payload;
      })
      .addCase(logInAction.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.loggedInError = action.payload;
      })
      /** signIn */
      .addCase(signInAction.pending, (state, action) => {
        state.isSignIn = true;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.isSignIn = false;
        state.user = action.payload;
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.isSignIn = false;
        state.loggedInError = action.payload;
      }),
});

export default users.reducer;

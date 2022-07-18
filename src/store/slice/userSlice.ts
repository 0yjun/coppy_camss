import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { UserService } from '../../service/userService';
const initialState = {
  userData: [],
  loginError: {},
  loginLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(UserService.login.pending, (state, action) => {
      console.log('pending');
      state.loginLoading = true;
    });
    builder.addCase(UserService.login.fulfilled, (state, action) => {
      console.log(' action.payload ', action.payload);
      state.userData = action.payload;
      state.loginLoading = false;
      console.log('UserService.getUser : ', UserService.getUser);
    });
    builder.addCase(UserService.login.rejected, (state, action) => {
      state.loginLoading = false;
      state.userData = [];
      state.loginError = action.error;
    });
  },
});

export default userSlice;

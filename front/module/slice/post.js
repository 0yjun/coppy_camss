import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  /*addPost*/
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  mainPosts: [],
  imagePaths: [],
};

export const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    addPostRequest: (state, data) => {
      state.addPostLoading = true;
      state.addPostDone = false;
      state.addPostError = null;
    },
    addPostSuccess: (state, data) => {
      state.addPostLoading = false;
      state.addPostDone = true;
      state.addPostError = null;
      state.mainPosts.unshift(action.data);
      state.imagePaths = [];
    },
    addPostFailure: (state, data) => {
      state.postError = payload;
      state.postLoading = false;
    },
  },
});

const { reducer, actions } = postSlice;
export const { postRequest, postSuccess, postFailure, logoutRequest, logoutSuccess, logoutFailure } = actions;
export default reducer;

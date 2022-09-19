import { createSlice } from "@reduxjs/toolkit";
import { onSearch } from "reducers/actions/dataset";
import { logInAction, logOutAction, signInAction } from "../actions/users";

export interface IData {
  isSearchLoading: boolean;
  isSaveLoading: boolean;
  data: any;
  initialData: any; //처음상태 저장하여 update여부 판단
  searchError: any;
  saveError: any;
}
const initialState: IData = {
  isSearchLoading: false,
  isSaveLoading: false,
  data: null,
  initialData: null,
  searchError: null,
  saveError: null,
};

export const dataset = createSlice({
  name: "dataset",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(onSearch.pending, (state, action) => {
        state.isSearchLoading = true;
      })
      .addCase(onSearch.fulfilled, (state, action) => {
        state.isSearchLoading = false;
        state.initialData = action.payload;
        state.data = action.payload;
        if (state.data.length > 0) {
          state.data.map((v: any, i: number) => {
            v.rowtype = "1";
          });
        }
      })
      .addCase(onSearch.rejected, (state, action) => {
        state.isSearchLoading = false;
        state.searchError = action.payload;
      }),
});

export default dataset.reducer;

import faker from '@faker-js/faker';
import { createSlice, current } from '@reduxjs/toolkit';
import common from './common';
const initialState = {
  data: null,
  name: null,
};

export const comnMain = createSlice({
  name: 'comnMain',
  initialState,
  reducers: {
    setName: (state, data) => {
      state.name = data.payload;
    },
  },
});

const { reducer, actions } = comnMain;
export const {} = actions;
export default reducer;

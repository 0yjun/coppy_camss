import faker from '@faker-js/faker';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  comnSearchDone: false,
  comnSearchLoading: false,
  comnSearchError: null,
  props: [
    { cd: 'upCd', type: 'text' },
    { cd: 'cd', type: 'text' },
    { cd: 'cdNm', type: 'text' },
    { cd: 'useYn', type: 'checkbox' },
  ],
  data: Array(10)
    .fill()
    .map(() => ({
      cd: faker.database.collation(),
      upCd: faker.database.collation(),
      cdNm: null,
      useYn: 1,
      phone: faker.phone.phoneNumber(),
    })),
};

export const comnSlice = createSlice({
  name: 'comnSlice',
  initialState,
  reducers: {
    comnSearch: () => {},
    comnSearchRequest: (state, data) => {
      state.comnSearchLoading = true;
    },
    comnSearchSuccess: (state, data) => {
      state.data = data.payload;
      state.comnSearchLoading = false;
    },
    comnSearchFailure: (state, data) => {
      state.comnSearchError = payload;
      state.comnSearchLoading = false;
    },
    comnAdd: (state, data) => {
      state.data.unshift({
        rowtype: 2,
      });
    },
    comnChange: (state, data) => {
      const value = data.payload.value;
      const columnId = data.payload.cell.column.id;
      const rowidx = data.payload.cell.row.id;
      let trgObj = state.data[rowidx];
      trgObj[columnId] = value;
    },
    comnDelete: (state, data) => {
      const value = data.payload.value;
      const columnId = data.payload.cell.column.id;
      const rowidx = data.payload.cell.row.id;
      let trgObj = state.data[rowidx];
      trgObj[columnId] = value;
    },
    comnSave: (state, data) => {
      const value = data.payload.value;
      const columnId = data.payload.cell.column.id;
      const rowidx = data.payload.cell.row.id;
      let trgObj = state.data[rowidx];
      trgObj[columnId] = value;
    },
  },
});

const { reducer, actions } = comnSlice;
export const { comnAdd, comnChange } = actions;
export default reducer;

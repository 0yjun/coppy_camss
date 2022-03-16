import faker from '@faker-js/faker';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  comnFindDone: false,
  comnFindLoading: false,
  comnFindError: null,
  comnSaveDone: false,
  comnSaveLoading: false,
  comnSaveError: null,
  name: null,
  props: [
    { cd: 'rowIdx', type: 'text' },
    { cd: 'rowType', type: 'text' },
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
    setName: (state, data) => {
      state.name = data.payload;
    },
    comnFindRequest: (state, data) => {
      state.comnFindLoading = true;
    },
    comnFindSuccess: (state, data) => {
      console.log('comnFindSuccess : ', data.payload);
      state.data = data.payload.data;
      state.data.rowtype = null;
      state.comnFindLoading = false;
    },
    comnFindFailure: (state, data) => {
      state.comnFindError = payload;
      state.comnFindLoading = false;
    },
    comnAdd: (state, data) => {
      state.data.unshift({
        rowtype: 'I',
      });
    },
    comnChange: (state, data) => {
      const value = data.payload.value;
      const columnId = data.payload.cell.column.id;
      const rowidx = data.payload.cell.row.id;
      let trgObj = state.data[rowidx];
      trgObj.rowtype = 'U';
      trgObj[columnId] = value;
    },
    comnDelete: (state, data) => {
      const value = data.payload.value;
      const columnId = data.payload.cell.column.id;
      const rowidx = data.payload.cell.row.id;
      let trgObj = state.data[rowidx];
      trgObj[columnId] = value;
    },
    comnSaveRequest: (state, data) => {
      state.comnSaveLoading = true;
    },
    comnSaveSuccess: (state, data) => {
      state.comnSaveLoading = false;
    },
    comnSaveFailure: (state, data) => {},
  },
});

const { reducer, actions, getInitialState } = comnSlice;
export const {
  setName,
  comnAdd,
  comnFindRequest,
  comnFindSuccess,
  comnFindFailure,
  comnChange,
  comnSaveRequest,
  comnSaveSuccess,
  comnsaveFailure,
} = actions;
export default reducer;

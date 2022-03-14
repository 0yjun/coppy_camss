import faker from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: Array(10)
    .fill()
    .map(() => ({
      name: faker.name.lastName() + faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    })),
};

export const comnSlice = createSlice({
  name: 'comnSlice',
  initialState,
  reducers: {
    /* login */
    comnAdd: (state, data) => {
      state.data.unshift({
        rowtype: 2,
      });
    },
    comnChange: (state, data) => {
      var value = data.payload.value;
      var columnId = data.payload.cell.column.id;
      var rowidx = data.payload.cell.row.id;
      state.data[rowidx].columnId = value;
      console.log('columnId : ', columnId);
      console.log('rowidx : ', rowidx);
      console.log('value : ', value);
      console.log('state.data[rowidx].columnId : ', state.data[rowidx].columnId);
    },
  },
});

const { reducer, actions } = comnSlice;
export const { comnAdd, comnChange } = actions;
export default reducer;

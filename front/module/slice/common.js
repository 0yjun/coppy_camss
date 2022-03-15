import faker from '@faker-js/faker';
import { createSlice, current } from '@reduxjs/toolkit';

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

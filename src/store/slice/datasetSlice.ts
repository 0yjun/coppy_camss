import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { DatasetService } from '../../service/datasetService';

const initialState = {
  data: [] as any,
  dataError: {},
  dataLoading: false,
};

export const datasetSlice = createSlice({
  name: 'dataSet',
  initialState,
  reducers: {
    onAdd(state) {
      console.log('state data : ', state.data);
      state.data.push({ rowtype: '2' });
    },
    onDelete(state) {
      console.log('state data : ', state.data);
      state.data.push({ rowtype: '4' });
    },
  },
  extraReducers: builder => {
    /* onSearch */
    builder.addCase(DatasetService.onSearch.pending, (state, action) => {
      console.log('pending');
      state.dataLoading = true;
    });
    builder.addCase(DatasetService.onSearch.fulfilled, (state, action) => {
      console.log(' action.payload ', action.payload);
      state.data = action.payload;
      state.dataLoading = false;
    });
    builder.addCase(DatasetService.onSearch.rejected, (state, action) => {
      state.dataLoading = false;
      state.data = [];
      state.dataError = action.error;
    });
  },
});
export const { onAdd } = datasetSlice.actions;
export default datasetSlice;

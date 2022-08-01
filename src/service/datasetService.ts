import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../lib/api/client';
export const DatasetService = {
  onSearch: createAsyncThunk(
    'getData',
    async (params: Object, { rejectWithValue }) => {
      const url = Object.values(params);
      console.log('dataset url ', url);

      try {
        const response = await client.post(`${url}`, params);
        response.data.map((v: any) => (v.rowtype = '1'));
        return response.data;
      } catch (error: any) {
        console.log('error is ', error);
        return rejectWithValue(error.response.data);
      }
    },
  ),
};

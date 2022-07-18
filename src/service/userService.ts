import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../lib/api/client';
export const UserService = {
  getUser: createAsyncThunk(
    'user/getuser',
    async (userId: string, thunkApi) => {
      const { data } = await client.get(`/user/user:${userId}`);
      return data;
    },
  ),
  login: createAsyncThunk(
    'user/login',
    async (loginData, { rejectWithValue }) => {
      console.log('loginData is ', loginData);
      try {
        const response = await client.post(`/user/login`, loginData);
        console.log('서버에서 받아온 데이터 : ', response.data);
        return response.data;
      } catch (error: any) {
        console.log('error is ', error);
        return rejectWithValue(error.response.data);
      }
    },
  ),
};

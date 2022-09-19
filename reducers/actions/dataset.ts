import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "lib/client";
import { IUser } from "../slice/users";

interface rejectMessage {
  errorMessage: string;
}

export const onSearch = createAsyncThunk(
  "onSearch",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await client.get(`${data.path}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fnSave = createAsyncThunk("dataset/login", async (data: any) => {
  console.log(data, "login action");
  return data;
});

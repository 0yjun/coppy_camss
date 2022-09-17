import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "lib/client";
import { IUser } from "../slice/users";

interface rejectMessage {
  errorMessage: string;
}

export const logOutAction = createAsyncThunk(
  "users/logout",
  async (data, thunkAPI) => {}
);

export const logInAction = createAsyncThunk(
  "users/login",
  async (data: any) => {
    console.log(data, "login action");
    return data;
  }
);

export const signInAction = createAsyncThunk(
  "ADD_USER",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await client.post("users", data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

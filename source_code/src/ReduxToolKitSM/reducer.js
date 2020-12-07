import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const delay = 1500;

export const incrementAsync = createAsyncThunk("incrementAsync", async (payload, thunkAPI) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return payload;
});

export const decrementAsync = createAsyncThunk("decrementAsync", async (payload, thunkAPI) => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return payload;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, { payload }) => {
      return state + payload;
    },
    decrement: (state, { payload }) => state - payload,
  },
  extraReducers: {
    [incrementAsync.fulfilled]: (state, { payload }) => {
      return state + payload;
    },
    [decrementAsync.fulfilled]: (state, { payload }) => {
      return state - payload;
    },
  },
});

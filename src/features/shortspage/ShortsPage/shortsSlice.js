import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  shorts: [],
  status: "initial",
  error: null,
};

export const fetchShorts = createAsyncThunk(
  "shorts/get",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const shortsSlice = createSlice({
  name: "shorts",
  initialState,
  reducers: {
    getShorts: (state, action) => {
      state.shorts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShorts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShorts.fulfilled, (state, action) => {
        state.status = "succeed";
        state.shorts = action.payload;
      })
      .addCase(fetchShorts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { getShorts } = shortsSlice.actions;
export default shortsSlice;

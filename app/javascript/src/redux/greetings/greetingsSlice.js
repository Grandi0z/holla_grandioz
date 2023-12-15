import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    try {
      const response = await axios.get('/greetings/api');
      return response.data;
    } catch (error) {
      throw new Error(`something went wrong: ${error.response.data}`);
    }
  },
);

const initialState = {
  greetings: [],
  loading: false,
  hasErrors: false,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        /* eslint-disable no-param-reassign */
        state.loading = true;
        /* eslint-enable no-param-reassign */
      })
      .addCase(getGreetings.fulfilled, (state, { payload }) => {
        /* eslint-disable no-param-reassign */
        state.greetings = payload;
        state.loading = false;
        state.hasErrors = false;
        /* eslint-enable no-param-reassign */
      })
      .addCase(getGreetings.rejected, (state) => {
        /* eslint-disable no-param-reassign */
        state.loading = false;
        state.hasErrors = true;
        /* eslint-enable no-param-reassign */
      });
  },
});

export default greetingsSlice.reducer;

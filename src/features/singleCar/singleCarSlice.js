import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userId = JSON.parse(localStorage.getItem('userId'));

const initialState = {
  car: [],
  status: 'idle',
};

export const fetchSingleCar = createAsyncThunk('singleCar/fetch', async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${userId}/cars/${id}`);

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.car;
  } catch (error) {
    return error.messages;
  }
});

const SingleCarSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCar.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchSingleCar.fulfilled, (state, { payload }) => ({
        ...state,
        car: payload,
        status: 'idle',
      }))
      .addCase(fetchSingleCar.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const selectCar = (state) => state.car;

export default SingleCarSlice.reducer;

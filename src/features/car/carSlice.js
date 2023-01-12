import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  status: 'idle',
};

export const fetchCar = createAsyncThunk('car/fetch', async () => {
  try {
    const data = await fetch('http://localhost:3000/api/v1/users/4/cars');

    const res = await data.json();
    return res.data;
  } catch (error) {
    return error.messages;
  }
});

const CarSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCar.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchCar.fulfilled, (state, { payload }) => ({
        ...state,
        cars: payload,
        status: 'idle',
      }))
      .addCase(fetchCar.rejected, (state) => ({
        ...state,
        status: 'rejected',
      }));
  },
});

export const selectAllCar = (state) => state.cars;

export default CarSlice.reducer;

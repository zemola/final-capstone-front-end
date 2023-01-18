import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  status: 'idle',
};

export const fetchCar = createAsyncThunk('car/fetch', async (page) => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/1/cars?page=${page}`);

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
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
      .addCase(fetchCar.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const selectAllCar = (state) => state.cars;

export default CarSlice.reducer;

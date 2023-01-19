import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const id = JSON.parse(localStorage.getItem('userId'));

const initialState = {
  cars: [],
  allCars: [],
  status: 'idle',
};

// const deleteCarAction = createAction('delete/car');

export const fetchCar = createAsyncThunk('car/fetch', async (page) => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${id}/cars?page=${page}`);

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.data;
  } catch (error) {
    return error.messages;
  }
});

export const fetchCars = createAsyncThunk('cars/fetch', async () => {
  try {
    const data = await fetch('http://localhost:3000/api/v1/cars');

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.data;
  } catch (error) {
    return error.messages;
  }
});

export const deleteCar = createAsyncThunk('car/delete', async () => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${id}/cars/${id}`, { method: 'DELETE' });

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return id;
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
    builder
      .addCase(deleteCar.fulfilled, (state, { payload }) => ({
        ...state,
        cars: state.cars.filter((car) => car.id !== payload),
        status: 'idle',
      }))
      .addCase(fetchCars.fulfilled, (state, { payload }) => ({
        ...state,
        allCars: payload,
        status: 'idle',
      }));
  },
});

export const selectAllCar = (state) => state.cars;

export default CarSlice.reducer;

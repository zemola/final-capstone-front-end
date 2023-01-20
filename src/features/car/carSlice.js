import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const id = JSON.parse(localStorage.getItem('userId'));

const initialState = {
  cars: [],
  allCars: [],
  status: 'idle',
  carDeleteMsg: '',
  carCreateMsg: '',
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

export const deleteCar = createAsyncThunk('car/delete', async (carId) => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${id}/cars/${carId}`, { method: 'DELETE' });

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return id;
  } catch (error) {
    return error.messages;
  }
});

export const createCar = createAsyncThunk('car/create', async ({
  brand, model, release_year, color, transmission, seats, wheelDrive, price, image, user_id,
}) => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${id}/cars`, {
      method: 'POST',
      body: JSON.stringify({
        brand,
        model,
        color,
        release_year,
        transmission,
        seats,
        wheel_drive: wheelDrive,
        price,
        image_link: image,
        user_id,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.message;
  } catch (error) {
    console.log(error);
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
        allCars: state.allCars.filter((car) => car.id * 1 !== payload),
        status: 'deleted',
        carDeleteMsg: '.',
      }))
      .addCase(fetchCars.fulfilled, (state, { payload }) => ({
        ...state,
        allCars: payload,
        status: 'idle',
        carDeleteMsg: '',
      }))
      .addCase(createCar.fulfilled, (state, { payload }) => ({
        ...state,
        carCreateMsg: payload,
      }));
  },
});

export const selectAllCar = (state) => state.cars;

export default CarSlice.reducer;

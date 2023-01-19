import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const id = JSON.parse(localStorage.getItem('userId'));

const initialState = {
  reservations: [],
  message: null,
  status: 'idle',
};

export const fetchReservatins = createAsyncThunk('reservations/fetch', async () => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${id}/reservations`);

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.data;
  } catch (error) {
    return error.messages;
  }
});

export const CreateReservation = createAsyncThunk('reservations/create', async (revData) => {
  try {
    const data = await fetch(`http://localhost:3000/api/v1/users/${id}/reservations`, {
      method: 'POST',
      body: {
        ...revData,
      },
    });

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.message;
  } catch (error) {
    return error.messages;
  }
});

const ReservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservatins.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchReservatins.fulfilled, (state, { payload }) => ({
        ...state,
        reservations: payload,
        status: 'idle',
      }))
      .addCase(fetchReservatins.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }))
      .addCase(CreateReservation.fulfilled, (state, { payload }) => ({
        ...state,
        message: payload,
      }));
  },
});

export const selectAllReservations = (state) => state.reservations;

export default ReservationsSlice.reducer;

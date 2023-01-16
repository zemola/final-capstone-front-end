import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  status: 'idle',
};

export const fetchReservatins = createAsyncThunk('reservations/fetch', async () => {
  try {
    const data = await fetch('http://localhost:3000/api/v1/users/1/reservations');

    const res = await data.json();
    if (res.error) {
      return [{ error: res.error }];
    }
    return res.data;
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
      }));
  },
});

export const selectAllReservations = (state) => state.reservations;

export default ReservationsSlice.reducer;

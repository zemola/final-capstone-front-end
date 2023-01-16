import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: 'idle',
};

export const fetchUser = createAsyncThunk('user/fetch', async () => {
  try {
    const data = await fetch('http://localhost:3000/api/v1/users');

    const res = await data.json();
    return res.data;
  } catch (error) {
    return error.messages;
  }
});

const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchUser.fulfilled, (state, { payload }) => ({
        ...state,
        users: payload,
        status: 'idle',
      }))
      .addCase(fetchUser.rejected, (state) => ({
        ...state,
        status: 'rejected',
      }));
  },
});

export const selectAllUsers = (state) => state.users;

export default UserSlice.reducer;

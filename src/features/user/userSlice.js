import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  currentUser: null,
  id: null,
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

export const setCurrentUser = createAsyncThunk('set/currentUser', async (user) => {
  try {
    localStorage.setItem('userId', JSON.stringify(user.id));
    return user;
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
      }))
      .addCase(setCurrentUser.fulfilled, (state, action) => ({
        ...state,
        currentUser: action.payload,
        id: action.payload.id,
      }));
  },
});

export const selectAllUsers = (state) => state.users;

export default UserSlice.reducer;

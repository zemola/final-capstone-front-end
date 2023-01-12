import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    cars: carReducer,
    reservations: {},
  },
});

export default store;

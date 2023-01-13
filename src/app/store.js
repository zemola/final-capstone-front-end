import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import userReducer from '../features/user/userSlice';
import reservationSlice from '../features/reservations/reservationSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    cars: carReducer,
    reservations: reservationSlice,
  },
});

export default store;

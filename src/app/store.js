import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import userReducer from '../features/user/userSlice';
import reservationSlice from '../features/reservations/reservationSlice';
import singleCarSlice from '../features/singleCar/singleCarSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    cars: carReducer,
    reservations: reservationSlice,
    singleCar: singleCarSlice,
  },
});

export default store;

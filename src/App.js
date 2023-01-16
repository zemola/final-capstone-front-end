import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { fetchCar } from './features/car/carSlice';
import { fetchUser } from './features/user/userSlice';
import { fetchReservatins } from './features/reservations/reservationSlice';
import SideBar from './components/SideBar';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchCar());
    dispatch(fetchReservatins());
  }, [dispatch]);

  return (
    <div className="App">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;

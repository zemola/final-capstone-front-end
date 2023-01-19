import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { fetchUser } from './features/user/userSlice';
import { fetchReservatins } from './features/reservations/reservationSlice';
import SideBar from './components/SideBar';
import LoginPage from './components/LoginPage';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  const isUser = () => {
    if (!currentUser) {
      return (
        <LoginPage />
      );
    }
    return (
      <>
        <SideBar />
        <Outlet />
      </>
    );
  };

  React.useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchReservatins());
  }, [dispatch]);

  return (
    <div className="App">
      {isUser()}
    </div>
  );
}

export default App;

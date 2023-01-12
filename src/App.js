import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import { fetchUser } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="App">
      <header>Hello React Capstone</header>
      <Outlet />
      <footer>Now here goes our footer</footer>
    </div>
  );
}

export default App;

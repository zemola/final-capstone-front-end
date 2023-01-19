import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import HomePage from './components/HomePage';
import CarDeletePage from './components/CarDeletePage';
import MyReservationsPage from './components/MyReservationsPage';
import SingleCarPage from './components/SingleCarPage';
import Reserve from './components/Reserve';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route element={<HomePage />} index />
            <Route element={<SingleCarPage />} path="cars/:id" />
            <Route element={<MyReservationsPage />} path="reservations" />
            <Route element={<Reserve />} path="/reserve" />
            <Route element={<CarDeletePage />} path="/delete" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../../app/store';
import App from '../../App';
import HomePage from '../HomePage';
import SingleCarPage from '../SingleCarPage';
import MyReservationsPage from '../MyReservationsPage';
import CarDeletePage from '../CarDeletePage';

describe('Test all app Components', () => {
  it('Test the app landing Page', () => {
    const home = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<App />}>
                <Route element={<HomePage />} index />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });

  it('Test the app Single car Page', () => {
    const carDetails = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<App />}>
                <Route element={<SingleCarPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(carDetails).toMatchSnapshot();
  });

  it('Test the app Reserve car Page', () => {
    const reserve = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<App />}>
                <Route element={<MyReservationsPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(reserve).toMatchSnapshot();
  });

  it('Test the app Delete car Page', () => {
    const Delete = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route element={<App />}>
                <Route element={<CarDeletePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(Delete).toMatchSnapshot();
  });
});

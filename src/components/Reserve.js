import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { CreateReservation } from '../features/reservations/reservationSlice';
import styles from './Reserve.module.css';

const Reserve = () => {
  const { cars } = useSelector((state) => state.cars);
  const location = useLocation();
  const id = location.state;

  const options = cars.map((car) => (
    <option id={car.id} key={car.id} value={car.id}>
      {car.brand}
    </option>
  ));
  const [reservedCarId, setReservedCarId] = useState(id);

  if (cars.length > 1 && reservedCarId === '') {
    setReservedCarId(cars[0].id);
  }
  const [userRID, setUserRId] = useState('');
  const [reservedFrom, setReservedFrom] = useState('');
  const [reservedUntil, setReservedUntil] = useState('');

  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.reservations);

  const data = {
    reserved_from: reservedFrom,
    reserved_until: reservedUntil,
    user_id: userRID,
    car_id: reservedCarId,
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('userId'));
    setUserRId(id);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Select your car and schedule a date</h1>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="car">
          <p className={styles.labelText}>Select your car:</p>
          <select
            value={reservedCarId}
            onChange={(e) => setReservedCarId(e.target.value)}
            id="car"
          >
            {options}
          </select>
        </label>

        <label className={styles.label} htmlFor="userId">
          <p className={styles.labelText}>User ID:</p>
          <input
            id="userId"
            type="text"
            disabled
            value={userRID}
            onChange={(e) => setUserRId(e.target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="startingDate">
          <p className={styles.labelText}>Starting Date:</p>
          <input
            id="startingDate"
            type="date"
            value={reservedFrom}
            onChange={(e) => setReservedFrom(e.target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="startingDate">
          <p className={styles.labelText}>Ending Date:</p>
          <input
            id="endingDate"
            type="date"
            value={reservedUntil}
            onChange={(e) => setReservedUntil(e.target.value)}
          />
        </label>
        <button
          className={styles.reserveBtn}
          type="button"
          onClick={() => dispatch(CreateReservation(data))}
        >
          Reserve
        </button>
        {message}
      </div>
    </div>
  );
};

export default Reserve;

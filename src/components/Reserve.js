import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Shop.module.css';

const Reserve = () => {
  const { cars } = useSelector((state) => state.cars);

  const options = cars.map((car) => (
    <option id={car.id} key={car.id} value={car.id}>{car.brand}</option>
  ));

  const [reservedCarId, setReservedCarId] = useState('');
  const [userRID, setUserRId] = useState('');
  const [reservedFrom, setReservedFrom] = useState('');
  const [reservedUntil, setReservedUntil] = useState('');

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Select your car and schedule a date</h1>
      <div className={styles.inputContainer}>
        <label htmlFor="car">
          Select your car:
          <br />
          <select value={reservedCarId} onChange={(e) => setReservedCarId(e.target.value)} id="car">
            {options}
          </select>
          <label htmlFor="userId">
            User ID:
            <br />
            <input id="userId" type="text" disabled value={userRID} onChange={(e) => setUserRId(e.target.value)} />
          </label>
          <label htmlFor="startingDate">
            Starting Date:
            <br />
            <input id="startingDate" type="date" value={reservedFrom} onChange={(e) => setReservedFrom(e.target.value)} />
          </label>
          <label htmlFor="startingDate">
            Ending Date:
            <br />
            <input id="endingDate" type="date" value={reservedUntil} onChange={(e) => setReservedUntil(e.target.value)} />
          </label>
        </label>
      </div>
    </div>
  );
};

export default Reserve;

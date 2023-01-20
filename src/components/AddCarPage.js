import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './AddCarPage.module.css';
import { createNewCar } from '../features/car/carSlice';

export default function AddCarPage() {
  const dispatch = useDispatch();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('#000000');
  const [transmission, setTransmition] = useState('');
  const [seats, setSeats] = useState('');
  const [wheelDrive, setWheelDrive] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [user_id, set_user_id] = useState('');
  const [release_year, setReleaseYear] = useState('');

  const id = JSON.parse(localStorage.getItem('userId'));

  const carData = {
    brand,
    model,
    color,
    transmission,
    seats,
    wheel_drive: wheelDrive,
    price,
    image_url: image,
    user_id,
    release_year,
  };

  useEffect(() => {
    set_user_id(id);
  }, [id]);

  return (
    <div className={styles.container}>
      <h1> Add Your Car</h1>
      <div className={styles.inputsContianer}>
        <input className={styles.input} type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter Car Brand" />
        <input className={styles.input} type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Enter Car Model" />
        <label htmlFor="color">
          Select Car Color:
          <br />
          <input id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <input className={styles.input} type="text" value={transmission} onChange={(e) => setTransmition(e.target.value)} placeholder="Enter Car Transmision" />
        <input className={styles.input} type="text" value={seats} onChange={(e) => setSeats(e.target.value)} placeholder="Enter Car Seats" />
        <input className={styles.input} type="text" value={wheelDrive} onChange={(e) => setWheelDrive(e.target.value)} placeholder="Enter Car Wheel Drive" />
        <input className={styles.input} type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Car Price" />
        <input className={styles.input} type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Car Image Url" />
        <label htmlFor="year">
          Select Car Release Year:
          <br />
          <input id="year" type="date" value={release_year} onChange={(e) => setReleaseYear(e.target.value)} />
        </label>
        <button className={styles.button} type="button" onClick={() => dispatch(createNewCar(carData))}>
          Create Car
        </button>
      </div>
    </div>
  );
}

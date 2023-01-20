import React, { useState, useEffect } from 'react';
import styles from './AddCarPage.module.css';

export default function AddCarPage() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [transmission, setTransmition] = useState('');
  const [seats, setSeats] = useState(0);
  const [wheelDrive, setWheelDrive] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(0);
  const [user_id, set_user_id] = useState(0);
  const [release_year, setReleaseYear] = useState('');

  const id = JSON.parse(localStorage.getItem('userId'));

  useEffect(() => {
    set_user_id(id);
    console.log(user_id);
  }, [id]);

  return (
    <div className={styles.container}>
      <h1> Add Your Car</h1>
      <div className={styles.inputsContianer}>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Enter Car Brand" />
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Enter Car Model" />
        <label htmlFor="color">
          Select Car Color:
          <input id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <input type="text" value={transmission} onChange={(e) => setTransmition(e.target.value)} placeholder="Enter Car Transmision" />
        <input type="text" value={seats} onChange={(e) => setSeats(e.target.value)} placeholder="Enter Car Seats" />
        <input type="text" value={wheelDrive} onChange={(e) => setWheelDrive(e.target.value)} placeholder="Enter Car Wheel Drive" />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Car Price" />
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter Car Image Url" />
        <label htmlFor="year">
          Select Car Release Year:
          <input id="year" type="date" value={release_year} onChange={(e) => setReleaseYear(e.target.value)} />
        </label>
      </div>
    </div>
  );
}

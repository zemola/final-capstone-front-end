import React from 'react';
import styles from './CarCard.module.css';
import carImg from '../img/car.png';

// eslint-disable-next-line react/prop-types
export default function CarCard({ price, brand, model }) {
  return (
    <div className={styles.container}>
      <img src={carImg} className={styles.carImg} alt={model} />
      <div className={styles.carDetails}>
        <h3>{model}</h3>
        <p>.................</p>
        <p>{`Brand: ${brand}`}</p>
        <p>{`Price: ${price}`}</p>
      </div>
      <div className={styles.socialLinks}>
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-google" />
      </div>
    </div>
  );
}

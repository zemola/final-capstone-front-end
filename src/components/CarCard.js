import React from 'react';
import styles from './CarCard.module.css';
import carImg from '../img/car.png';

// eslint-disable-next-line react/prop-types
export default function CarCard({ price, brand, model }) {
  return (
    <div className={styles.container}>
      <img src={carImg} className={styles.carImg} alt={model} />
      <div className={styles.carDetails}>
        <h3 className={styles.brnadName}>{model}</h3>
        <p className={styles.dots}>.......................</p>
        <p className={styles.detailsInfo}>{`Brand: ${brand}`}</p>
        <p className={styles.detailsInfo}>{`Price: ${price}`}</p>
        <div className={styles.socialLinks}>
          <i className="fa-brands fa-facebook link" />
          <i className="fa-brands fa-twitter link" />
          <i className="fa-brands fa-google link" />
        </div>
      </div>
    </div>
  );
}

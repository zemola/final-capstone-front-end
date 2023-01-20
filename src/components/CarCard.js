import React from 'react';
import styles from './CarCard.module.css';
// import carImg from '../img/car.png';

export default function CarCard({
  // eslint-disable-next-line react/prop-types
  price, brand, model, image_link,
}) {
  return (
    <div className={styles.container}>
      <img src={`${image_link}`} className={styles.carImg} alt={model} />
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

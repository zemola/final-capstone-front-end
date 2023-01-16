import React from 'react';
import styles from './SingleCarPage.module.css';
import carImage from '../img/car.png';

export default function SingleCarPage() {
  return (
    <div className={styles.container}>
      <img className={styles.carImage} src={carImage} alt="carImage" />
      <div className={styles.carDetails}>
        <div className={styles.carNameContainer}>
          <h3>Car Name</h3>
          <p>Car Info</p>
        </div>
        <ul className={styles.infoChart}>
          <li className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Price
            </p>
            <p className={styles.infoChartText}>
              $ 1200
            </p>
          </li>
          <li className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Price
            </p>
            <p className={styles.infoChartText}>
              $ 1200
            </p>
          </li>
          <li className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Price
            </p>
            <p className={styles.infoChartText}>
              $ 1200
            </p>
          </li>
          <li className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Price
            </p>
            <p className={styles.infoChartText}>
              $ 1200
            </p>
          </li>
        </ul>
      </div>
      SingleCarPage
    </div>
  );
}

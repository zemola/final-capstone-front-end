import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './SingleCarPage.module.css';
import carImage from '../img/car.png';

export default function SingleCarPage() {
  const location = useLocation();
  const id = location.state;
  console.log(id);
  return (
    <div className={styles.container}>
      <div className={styles.carImageContainer}>
        <img className={styles.carImage} src={carImage} alt="carImage" />
      </div>
      <div className={styles.carDetails}>
        <div className={styles.carNameContainer}>
          <h3>Car Name</h3>
          <p>Car Info</p>
        </div>
        <ul className={styles.infoChart}>
          <li style={{ backgroundColor: '#e2e3e5' }} className={styles.infoChartItem}>
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
          <li style={{ backgroundColor: '#e2e3e5' }} className={styles.infoChartItem}>
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
        <div className={styles.btnContainer}>
          <button type="button" onClick={() => console.log('Edit')} className={styles.btn}>
            Edit
          </button>
          <button type="button" onClick={() => console.log('Delete')} className={styles.btn}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

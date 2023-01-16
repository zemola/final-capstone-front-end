import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SingleCarPage.module.css';
import carImage from '../img/car.png';
import { fetchSingleCar } from '../features/singleCar/singleCarSlice';

export default function SingleCarPage() {
  const location = useLocation();
  const id = location.state;
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state.singleCar);
  useEffect(() => {
    dispatch(fetchSingleCar(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <div className={styles.carImageContainer}>
        <img className={styles.carImage} src={carImage} alt="carImage" />
      </div>
      <div className={styles.carDetails}>
        <div className={styles.carNameContainer}>
          <h3>
            {car.brand}
          </h3>
          <p>
            {car.model}
          </p>
        </div>
        <ul className={styles.infoChart}>
          <li style={{ backgroundColor: '#e2e3e5' }} className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Price
            </p>
            <p className={styles.infoChartText}>
              $
              { car.price }
            </p>
          </li>
          <li className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Year
            </p>
            <p className={styles.infoChartText}>
              {car.release_year}
            </p>
          </li>
          <li style={{ backgroundColor: '#e2e3e5' }} className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Seats
            </p>
            <p className={styles.infoChartText}>
              {car.seats}
            </p>
          </li>
          <li className={styles.infoChartItem}>
            <p className={styles.infoChartText}>
              Wheels
            </p>
            <p className={styles.infoChartText}>
              {car.wheel_drive}
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

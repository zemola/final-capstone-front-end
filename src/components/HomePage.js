import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { cars } = useSelector((state) => state.cars);

  const showCars = () => {
    let carsList;
    if (cars.length > 0) {
      carsList = cars.map((item) => (
        <Link className={styles.carLink} state={item.id} to={`cars/${item.id}`} key={item.id}>
          <CarCard
            price={item.price}
            brand={item.brand}
            model={item.model}
          />
        </Link>
      ));
    } else {
      carsList = <h1 className={styles.noCars}>There are no cars yet</h1>;
    }
    return carsList;
  };

  useEffect(() => {
    showCars();
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.mainHeading}>
          latest models
        </h1>
        <p className={styles.headingInfo}>
          Please select a model
        </p>
      </div>

      <div className={styles.modelsContainer}>
        <button type="button" onClick={() => console.log('Prev')} className={styles.pageBtnPrev}>
          <p>
            {'<'}
          </p>
        </button>
        <div className={styles.carsContainer}>
          { showCars() }
        </div>
        <button type="button" onClick={() => console.log('Next')} className={styles.pageBtnNext}>
          <p>
            {'>'}
          </p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

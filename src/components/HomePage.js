import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CarCard from './CarCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { cars } = useSelector((state) => state.cars);

  const showCars = () => {
    let carsList;
    if (cars.length > 0) {
      carsList = cars.map((item) => (
        <NavLink className={styles.carLink} to={`cars/${item.id}`} key={item.id}>
          <CarCard
            price={item.price}
            brand={item.brand}
            model={item.model}
          />
        </NavLink>
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
        { showCars() }
      </div>
    </div>
  );
};

export default HomePage;

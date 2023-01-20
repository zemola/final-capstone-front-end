/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../features/car/carSlice';
import CarCard from './CarCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { cars } = useSelector((state) => state.cars);
  // eslint-disable-next-line prefer-const
  let [page, setPage] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [nextDisabled, setNextDisabled] = useState(false);

  const dispatch = useDispatch();

  const showCars = () => {
    let carsList;
    if (cars.length > 0) {
      carsList = cars.map((item) => (
        <Link className={styles.carLink} state={item.id} to={`cars/${item.id}`} key={item.id}>
          <CarCard
            price={item.price}
            brand={item.brand}
            model={item.model}
            image={item.image_link}
          />
        </Link>
      ));
    } else {
      carsList = <h1 className={styles.noCars}>There are no more cars yet</h1>;
    }
    return carsList;
  };

  const getCars = () => {
    dispatch(fetchCar(page));
  };

  const nextPage = () => {
    setPage(page += 1);
    setPrevDisabled(false);
    dispatch(fetchCar(page));
    if (cars.length <= 0) {
      setNextDisabled(true);
    }
  };

  const prevPage = () => {
    if (cars.length > 0) {
      setNextDisabled(false);
    }
    if (page > 1) {
      setPage(page -= 1);
    }
    if (page === 1) {
      setPrevDisabled(true);
    }

    dispatch(fetchCar(page));
  };

  useEffect(() => {
    getCars();
    showCars();
  }, []);

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
        <button type="button" disabled={prevDisabled} onClick={() => prevPage()} className={prevDisabled ? styles.pageBtnDisabledPrev : styles.pageBtnPrev}>
          <p>
            {'<'}
          </p>
        </button>
        <div className={styles.carsContainer}>
          { showCars() }
        </div>
        <button type="button" disabled={nextDisabled} onClick={() => nextPage()} className={nextDisabled ? styles.pageBtnDisabledNext : styles.pageBtnNext}>
          <p>
            {'>'}
          </p>
        </button>
      </div>
    </div>
  );
};

export default HomePage;

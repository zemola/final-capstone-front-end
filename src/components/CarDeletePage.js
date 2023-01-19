import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, fetchCars } from '../features/car/carSlice';

import styles from './CarDeletePage.module.css';

export default function CarDeletePage() {
  const dispatch = useDispatch();
  const { allCars } = useSelector((state) => state.cars);
  React.useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch, allCars]);

  let list = null;
  if (allCars.length > 0) {
    list = allCars.map((car) => (
      <tr key={car.id} className={styles.tableRow}>
        <td className={styles.tableData}>
          {car.brand}
        </td>
        <td>
          <button type="button" className={styles.deleteBtn} aria-label="delete button" onClick={() => dispatch(deleteCar(car.id))}>
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div className={styles.container}>
      <h1>Which car do you want to delete?</h1>
      <table className={styles.table}>
        <thead className={styles.tableHeading}>
          <tr className={styles.tableHeader}>
            <th>Car Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {list}
        </tbody>
      </table>
    </div>
  );
}

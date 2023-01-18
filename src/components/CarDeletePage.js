import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, fetchCars } from '../features/car/carSlice';

import styles from './CarDeletePage.module.css';

export default function CarDeletePage() {
  const dispatch = useDispatch();
  const { allCars } = useSelector((state) => state.cars);
  console.log(allCars);

  React.useEffect(() => {
    dispatch(fetchCars());
  }, []);

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
      <table className={styles.table}>
        <th className={styles.tableHeading}>
          <td>Car Name</td>
          <td>Delete</td>
        </th>
        {list}
      </table>
    </div>
  );
}

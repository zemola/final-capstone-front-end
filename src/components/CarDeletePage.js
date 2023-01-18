import React from 'react';
import { useSelector } from 'react-redux';

import styles from './CarDeletePage.module.css';

export default function CarDeletePage() {
  const { cars } = useSelector((state) => state.cars);
  let list = null;
  if (cars.length > 1) {
    list = cars.map((car) => (
      <tr key={car.id} className={styles.tableRow}>
        <td className={styles.tableData}>
          {car.brand}
        </td>
        <td>
          <button type="button" className={styles.deleteBtn} aria-label="delete button" onClick={() => console.log('delete')}>
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

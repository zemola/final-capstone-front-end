import React from 'react';
import { useSelector } from 'react-redux';

import styles from './MyReservationsPage.module.css';

export default function MyReservationsPage() {
  const { reservations } = useSelector((state) => state.reservations);

  let list = null;
  if (reservations.length > 0) {
    list = reservations.map((resv) => (
      <tr key={resv.id} className={styles.tableRow}>
        <td className={styles.tableData}>
          {resv.car.brand}
        </td>
        <td className={styles.tableData}>
          {resv.car.reservation_from}
        </td>
        <td className={styles.tableData}>
          {resv.car.reservation_until}
        </td>
      </tr>
    ));
  }

  return (
    <div className={styles.container}>
      <h1>Which car do you want to delete?</h1>
      <table className={styles.table}>
        <th className={styles.tableHeading}>
          <td>Car Name</td>
          <td>Reserved From</td>
          <td>Reserved Until</td>
          <td>Delete</td>
        </th>
        {list}
      </table>
    </div>
  );
}

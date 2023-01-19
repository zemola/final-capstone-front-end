import React from 'react';
import { useSelector } from 'react-redux';

import styles from './MyReservationsPage.module.css';

export default function MyReservationsPage() {
  const { reservations } = useSelector((state) => state.reservations);
  let list = null;
  if (reservations.length > 0) {
    list = reservations.map((item) => (

      <tr key={item.id} className={styles.tableRow}>
        <td className={styles.tableData}>
          {item.id}
        </td>
        <td className={styles.tableData}>
          {item.reserved_from}
        </td>
        <td className={styles.tableData}>
          {item.reserved_until}
        </td>
      </tr>
    ));
  }

  return (
    <div className={styles.container}>
      <h1>All your Reserations</h1>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableHeading}>
            <th>Car ID</th>
            <th>Reserved From</th>
            <th>Reserved Until</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {list}
        </tbody>
      </table>
    </div>
  );
}

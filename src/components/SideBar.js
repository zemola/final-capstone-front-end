import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <a href="/">Logo</a>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
          >
            Models
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
            to="/lifestyle"
          >
            Life Style
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
            exact
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
            to="/drive"
          >
            Test Drive
          </NavLink>
        </li>
      </ul>

      <div className="socialLinks">
        <p>socialLinks</p>
      </div>
    </div>
  );
}

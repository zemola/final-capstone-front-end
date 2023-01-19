import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';
import logo from '../img/logo.png';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <NavLink href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <ul className={styles.iconMenu}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
            >
              <i className="fa-solid fa-car-side" />
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
              to="/reservations"
            >
              <i className="fa-solid fa-chart-simple" />
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
              exact
              to="/reserve"
            >
              <i className="fa-solid fa-car-side" />
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
              to="/delete"
            >
              <i className="fa-solid fa-trash" />
            </NavLink>
          </li>
        </ul>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
            >
              Models
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
              to="/reservations"
            >
              Reservations
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
              exact
              to="/reserve"
            >
              Reserve
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.navLink : styles.navLinkTwo)}
              to="/delete"
            >
              Delete
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.socialLinksContainer}>
        <div className={styles.socialLinks}>
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-google" />
          <i className="fa-brands fa-pinterest-p" />
          <i className="fa-brands fa-linkedin" />
        </div>
        <div>
          <p className={styles.copyRight}>@2023 Microverse Capstone</p>
        </div>
      </div>
    </div>
  );
}

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

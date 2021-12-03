import React from "react";

import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => (
  <div className={styles.header}>
    <ul className={styles.navbar}>
      <li className={styles.navbarItem}>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navbarItem}>
        {" "}
        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;

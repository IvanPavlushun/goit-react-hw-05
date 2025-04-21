import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <NavLink to="/" className={styles.navLink} activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.navLink} activeClassName="active">
        Movies
      </NavLink>
    </nav>
  )
}

export default Navigation;

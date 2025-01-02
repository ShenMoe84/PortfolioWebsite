import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {

  return (
    <nav className={styles.navBar}>
      <div>
        <NavLink to="/" className={styles.home}>Sheena Monroe</NavLink>
        <h3 className={styles.tagLine}>Innovation Driven || Solution Focused || Creativity Enthusiast</h3>
        <NavLink to="/graduatework" className={({ isActive }) => isActive ? styles.active : styles.link}>Graduate Work</NavLink>
        <NavLink to="/theatricalwork" className={({ isActive }) => isActive ? styles.active : styles.link}>Theatrical Work</NavLink>
        <NavLink to="/softwaredevelopment" className={({ isActive }) => isActive ? styles.active : styles.link}>Software Development</NavLink>
        <NavLink to="/productdevelopment" className={({ isActive }) => isActive ? styles.active : styles.link}>Product Development</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
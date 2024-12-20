import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {

  return (
    <nav className={styles.navBar}>
      <div>
        <NavLink to={"/"} className={styles.home}>Sheena Monroe</NavLink>
        <h3>Innovation Driven Creative Problem Solver</h3>
        <NavLink to={"/graduatework"} className={styles.link}>Graduate Work</NavLink>
        <NavLink to={"/theatricalwork"} className={styles.link}>Theatrical Work</NavLink>
        <NavLink to={"/softwaredevelopment"} className={styles.link}>Software Development</NavLink>
        <NavLink to={"/productdevelopment"} className={styles.link}>Product Development</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { Fade as Hamburger } from "hamburger-react";

const NavBar = () => {

  const [isOpen, setOpen] = useState(false)

  const handleToggle = () => {

  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.headerCont}>
        <NavLink to="/" className={styles.home}>Sheena Monroe</NavLink>
        <h3 className={styles.tagLine}>Innovation Driven | Solution Focused | Creativity Enthusiast</h3>
      </div>
      <div className={styles.navCont}>
        <NavLink to="/graduatework" className={({ isActive }) => isActive ? styles.active : styles.link}>Graduate Work</NavLink>
        <NavLink to="/softwaredevelopment" className={({ isActive }) => isActive ? styles.active : styles.link}>Software Development</NavLink>
        <NavLink to="/productdevelopment" className={({ isActive }) => isActive ? styles.active : styles.link}>Product Development</NavLink>
        <NavLink to="/more" className={({ isActive }) => isActive ? styles.active : styles.link}>More</NavLink>
      </div>
      <Hamburger onToggle={setOpen}/>
    </nav>
  );
};

export default NavBar;
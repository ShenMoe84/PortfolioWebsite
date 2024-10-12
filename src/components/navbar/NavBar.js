import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {

  return (
    <nav>
      <div>
        <h1>Sheena Monroe</h1>
        <NavLink to="/graduatework">Graduate Work</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
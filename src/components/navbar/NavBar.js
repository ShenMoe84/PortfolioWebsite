import { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { Fade as Hamburger } from "hamburger-react";

const NavBar = () => {

  const [isOpen, setOpen] = useState(false);

  const onToggle = (toggled) => {
    if (toggled) {
      setOpen(!isOpen)
    }
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.headerCont}>
        <NavLink to="/" className={styles.home}>Sheena Monroe</NavLink>
        <h3 className={styles.tagLine}>Innovation Driver | User Focused | Creativity Leader</h3>
      </div>
      <div className={styles.hambMenuCont}>
        {isOpen && (
          <div
            className={styles.navCont}>
            <NavLink to="/graduatestudies"
              className={({ isActive }) => isActive ? styles.active : styles.link}>Graduate Studies</NavLink>
            <NavLink to="/graduatestudies/projects"
              className={({ isActive }) => isActive ? styles.active : styles.link}>{">"}Projects</NavLink>
            <NavLink to="/softwaredevelopment"
              className={({ isActive }) => isActive ? styles.active : styles.link}>Software Development</NavLink>
            <NavLink to="/more"
              className={({ isActive }) => isActive ? styles.active : styles.link}>More</NavLink>
          </div>)}
        <div className={styles.hamburger}>
          <Hamburger
            direction="left"
            color="#e6c68c"
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
            onToggle={onToggle()} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
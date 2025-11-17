import React, { useState } from "react";
import Hamburger from "hamburger-react";
import styles from "../hamburger/Hamburger.module.css";

const HamburgerMenu = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.hamburgerCont}>
      <div className={styles.prototypingProjs}></div>
      <div className={styles.secondaryMenuCont}>
        <div className={styles.mantleClock}></div>
        <div className={styles.bookcase}></div>
        <div className={styles.table}></div>
      </div>
      <div className={styles.otherProjs}></div>
      <div className={styles.designCh1}></div>
      <div className={styles.designCh2}></div>
    </div>
  );
};

export default HamburgerMenu;
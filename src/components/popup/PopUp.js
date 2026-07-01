import React from "react";
import styles from "./PopUp.module.css";

const PopUp = ({ showPopUp, closePopUp, currentPopUp, idx, children }) => {
  if (!showPopUp) { return null }

  return (
    <div className={currentPopUp === idx ? styles.popUp : styles.popUpHidden}>
      {children}
      <button className={styles.popUpButton} onClick={closePopUp}>X</button>
    </div>
  )
}

export default PopUp;
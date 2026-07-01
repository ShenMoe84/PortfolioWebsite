import React from "react";
import styles from "./PopUp.module.css";

const PopUp = ({ showPopUp, closePopUp, currentPopUp, idx, children }) => {
  if (!showPopUp) { return null }

  return (
    <div className={currentPopUp === idx ? styles.popUp : styles.popUpHidden}>
      <button className={styles.popUpButton} onClick={closePopUp}>X</button>
      {children}
    </div>
  )
}

export default PopUp;
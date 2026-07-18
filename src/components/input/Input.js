import React from "react";
import styles from './Input.module.css';

const Input = ({
  type, name, onChange, error, errMsg, placeholder
}) => (
  <div>
    <label className={styles.label} htmlFor={name}>{name}</label>
    <br />
    <input
      className={styles.input}
      name={name}
      type={type}
      id={name}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <p className={styles.errMsg}>{errMsg}</p>}
  </div>
);
export default Input;
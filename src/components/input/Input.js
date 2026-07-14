import React from "react";
import styles from './Input.module.css';

const Input = ({
  type, name, value, onChange, error, errMsg
}) => (
  <div>
    <label className={styles.label} htmlFor={name}>{name}</label>
    <br />
    <input
      className={styles.input}
      name={name}
      type={type}
      defaultValue={value}
      id={name}
      onChange={onChange}
    />
    {error && <p data-testid="errorDiv" className={styles.errMsg}>{errMsg}</p>}
  </div>
);
export default Input;
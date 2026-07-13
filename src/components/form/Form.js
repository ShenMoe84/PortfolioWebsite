import React from 'react';
import styles from './Form.module.css';

const Form = ({
  children, title, onSubmit, noValidate
}) => (
  <form noValidate={noValidate} onSubmit={onSubmit} className={styles.form}>
    <h1>{title}</h1>
    {children}
  </form>
);

export default Form;
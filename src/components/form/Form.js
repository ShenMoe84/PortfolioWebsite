import React from 'react';
import styles from './Form.module.css';

const Form = ({
  children, title, onSubmit, id
}) => (
  <form onSubmit={onSubmit} className={styles.form}>
    <h1 className={styles.formTitle}>{title}</h1>
    {children}
  </form>
);

export default Form;
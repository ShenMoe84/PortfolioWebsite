import React from 'react';
import styles from './Form.module.css';

const Form = ({ children, title, onSubmit, ref }) => {

  return (
    <form onSubmit={onSubmit} className={styles.form} ref={ref}>
      <h1 className={styles.formTitle}>{title}</h1>
      {children}
    </form>
  )
};

export default Form;
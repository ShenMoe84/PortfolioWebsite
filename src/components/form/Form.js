import React from 'react';
import styles from './Form.module.css';

const Form = ({ children, noValidate, title, onSubmit, ref }) => {

  return (
    <form noValidate onSubmit={onSubmit} className={styles.form} ref={ref}>
      <h1 className={styles.formTitle}>{title}</h1>
      {children}
    </form>
  )
};

export default Form;
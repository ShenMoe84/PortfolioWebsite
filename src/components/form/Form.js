import React from 'react';
import styles from './Form.module.css';

const Form = ({ children, noValidate, title, action, ref }) => {

  return (
    <form noValidate action={action} className={styles.form} ref={ref}>
      <h1 className={styles.formTitle}>{title}</h1>
      {children}
    </form>
  )
};

export default Form;
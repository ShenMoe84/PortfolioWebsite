import React, { forwardRef } from 'react';
import styles from './Form.module.css';

const Form = forwardRef((props, ref) => {
  const { children, title, onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className={styles.form} ref={ref}>
      <h1 className={styles.formTitle}>{title}</h1>
      {children}
    </form>
  )
});

export default Form;
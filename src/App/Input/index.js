import React from 'react';

import styles from './styles.module.css';

const Input = ({ value, onInput }) => {
  return (
    <input value={value} onInput={onInput} className={styles.input}></input>
  );
};

export default Input;

import React from 'react';
import styles from './styles.module.css';

const TextField = ({ id, input, meta, ...rest }) => {
  return (
    <div>
      <input id={id} {...rest} {...input} />
      {meta.error && meta.submitFailed && (
        <p className={styles.errorMessage}>{meta.error}</p>
      )}
    </div>
  );
};

export default TextField;

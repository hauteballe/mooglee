import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';
import CloseIcon from '../../CloseIcon';

const RandomRectangle = ({ value, onHide, show }) => {
  const classes = classNames(styles.rectangle, {
    [styles.green]: value >= 700,
    [styles.yellow]: value > 300 && value < 700,
    [styles.red]: value <= 300,
  });

  return (
    <div>
      {show && (
        <div className={classes}>
          <span className={styles.randomNumber}>{value}</span>
          <button className={styles.iconButton} onClick={onHide}>
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default RandomRectangle;

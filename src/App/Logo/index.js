import React from 'react';

import styles from './styles.module.css';
import classNames from 'classnames';
import logo from '../Logo/logo.png';

const Logo = ({ size = 'regular' }) => {
  const classes = classNames({
    [styles.regular]: size === 'regular',
    [styles.small]: size === 'small',
  });

  return <img className={classes} src={logo} alt='Logo' />;
};

export default Logo;

import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';
import logo from '../Logo/logo.png';

const Logo = ({ size = 'regular' }) => {
  const classes = classNames({
    [styles.regular]: size === 'regular',
    [styles.small]: size === 'small',
  });

  return <img className={classes} src={logo} alt='Logo' />;
};

export default Logo;

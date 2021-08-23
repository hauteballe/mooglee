import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const UserIcon = ({ user }) => {
  if (user.isAuthorized) {
    return (
      <div className={`${styles.headerLinks} ${styles.userLink}`}>
        {user.username[0]}
      </div>
    );
  }
  return (
    <Link className={styles.loginLink} to='/mooglee/login'>
      Войти
    </Link>
  );
};

export default UserIcon;

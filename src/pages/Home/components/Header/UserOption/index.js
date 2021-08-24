import React from 'react';
import { Link } from 'react-router-dom';
import usePresenter from './hooks/usePresenter';

import styles from './styles.module.css';

const UserOption = () => {
  const { user } = usePresenter();

  if (user.username) {
    return (
      <div className={`${styles.headerLinks} ${styles.userLink}`}>
        {user.username.toUpperCase()[0]}
      </div>
    );
  }
  return (
    <Link className={styles.loginLink} to='/mooglee/login'>
      Войти
    </Link>
  );
};

export default UserOption;

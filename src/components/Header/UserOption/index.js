import React from 'react';
import { Link } from 'react-router-dom';
import usePresenter from './hooks/usePresenter';
import classNames from 'classnames';

import styles from './styles.module.css';

const UserOption = () => {
  const { userAbbreviation } = usePresenter();

  if (userAbbreviation) {
    return (
      <div className={classNames(styles.headerLinks, styles.userLink)}>
        {userAbbreviation}
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

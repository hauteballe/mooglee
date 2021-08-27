import React from 'react';
import { Link } from 'react-router-dom';
import usePresenter from './hooks/usePresenter';
import classNames from 'classnames';

import styles from './styles.module.css';
import DropdownMenu from '../DropdownMenu';

const UserOption = () => {
  const { userAbbreviation } = usePresenter();

  if (userAbbreviation) {
    return (
      <div>
        <div className={classNames(styles.headerLinks, styles.userLink)}>
          {userAbbreviation}
        </div>
        <DropdownMenu />
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

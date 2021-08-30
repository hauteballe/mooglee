import React from 'react';
import { Link } from 'react-router-dom';
import usePresenter from './hooks/usePresenter';
import classNames from 'classnames';

import styles from './styles.module.css';
import DropdownMenu from '../DropdownMenu';

const UserOption = () => {
  const { userAbbreviation, onClick, anchorElement, isOpen, onClose } =
    usePresenter();

  if (userAbbreviation) {
    return (
      <div>
        <div
          ref={anchorElement}
          onClick={onClick}
          className={classNames(styles.headerLinks, styles.userLink, {
            [styles.userLinkActive]: isOpen,
          })}
        >
          {userAbbreviation}
        </div>
        <DropdownMenu
          anchorElement={anchorElement.current}
          isOpen={isOpen}
          onClose={onClose}
        />
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

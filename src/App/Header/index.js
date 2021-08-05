import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTh } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Logo from '../Logo';
import Input from '../Input';
import CloseIcon from '../CloseIcon';

const Header = ({
  user,
  isSearchModeEnabled,
  disableSearchMode,
  searchText,
}) => {
  const SettingsIcon = () => {
    return <FontAwesomeIcon icon={faCog} />;
  };

  const MenuIcon = () => {
    return <FontAwesomeIcon icon={faTh} />;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        {isSearchModeEnabled && <Logo size='small' />}
        {isSearchModeEnabled && <Input value={searchText} onInput={() => {}} />}
        {isSearchModeEnabled && (
          <button onClick={disableSearchMode} className={styles.closeButton}>
            {' '}
            <CloseIcon />{' '}
          </button>
        )}
      </div>
      <div className={styles.headerItem}>
        <div className={styles.headerLinks}>
          {!isSearchModeEnabled && <a href='../App/App.js'>Почта</a>}
          {isSearchModeEnabled && <SettingsIcon />}
        </div>
        <div className={styles.headerLinks}>
          {!isSearchModeEnabled && <a href='../App/App.js'>Картинки</a>}
          {isSearchModeEnabled && <MenuIcon />}
        </div>
        <div className={`${styles.headerLinks} ${styles.userLink}`}>
          <a href='../App/App.js'>{user[0]}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

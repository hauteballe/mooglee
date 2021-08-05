import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';
import { faCog, faTh } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import CloseIcon from '../../components/CloseIcon';

const SearchHeader = ({ user, disableSearchMode, searchText }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        <Logo size='small' />
        <Input value={searchText} onInput={() => {}} />
        <button onClick={disableSearchMode} className={styles.closeButton}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.headerItem}>
        <div className={styles.headerLinks}>
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className={styles.headerLinks}>
          <FontAwesomeIcon icon={faTh} />
        </div>
        <div className={`${styles.headerLinks} ${styles.userLink}`}>
          <a href='../App/App.js'>{user[0]}</a>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;

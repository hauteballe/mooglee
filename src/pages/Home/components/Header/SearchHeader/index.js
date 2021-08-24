import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import { faCog, faTh } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Logo';
import Input from '../../Input';
import CloseIcon from '../../CloseIcon';
import UserOption from '../UserOption';

const SearchHeader = ({ user, disableSearchMode, searchText }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}>
        <Link to='/mooglee' onClick={disableSearchMode}>
          <Logo size='small' />
        </Link>
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
        <UserOption user={user} />
      </div>
    </header>
  );
};

export default SearchHeader;

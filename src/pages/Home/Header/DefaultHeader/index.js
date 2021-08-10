import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const DefaultHeader = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerItem}></div>
      <div className={styles.headerItem}>
        <div className={styles.headerLinks}>
          <a href='../App/App.js'>Почта</a>
        </div>
        <div className={styles.headerLinks}>
          <Link to='/mooglee/images'>Картинки</Link>
        </div>
        <div className={`${styles.headerLinks} ${styles.userLink}`}>
          <a href='../App/App.js'>{user[0]}</a>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;

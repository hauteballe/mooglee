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
          <Link to='/mooglee/images' className={styles.postsLink}>
            Картинки
          </Link>
        </div>
        <div className={`${styles.headerLinks} ${styles.userLink}`}>
          <Link to='/mooglee/login'>{user[0]}</Link>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;

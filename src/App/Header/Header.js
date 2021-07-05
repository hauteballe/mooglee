import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
      <div className={styles.headerLinks}>
        <a href="../App/App.js">Почта</a>
      </div>
      <div className={styles.headerLinks}>
        <a href="../App/App.js">Картинки</a>
    </div>
      <div className={`${styles.headerLinks} ${styles.userLink}`}>
        <a href="../App/App.js">А</a>
      </div>
    </header>
    ) 
}

export default Header;
import React from 'react'
import styles from './styles.module.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLinks}>
        <a href="../App/App.js">Почта</a>
      </div>
      <div className={styles.headerLinks}>
        <a href="../App/App.js">Картинки</a>
      </div>
      <div className={`${styles.headerLinks} ${styles.userLink}`}>
        <a href="../App/App.js">
          { props.user[0] }
        </a>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLineContainer}>
        <span className={styles.footerElement}>Беларусь</span>
      </div>
      <div className={styles.footerLineContainer}>
        <span className={styles.footerElement}>Реклама</span>
        <span className={styles.footerElement}>Для Бизнеса</span>
        <span className={styles.footerElement}>Все о Moogle</span>
        <span className={styles.footerElement}>Как работает Поиск</span>
      </div>
    </footer>
  )
}

export default Footer

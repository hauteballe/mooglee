import React from 'react';
import styles from './styles.module.css';
import logo from './logo.png'

const Main = () => {
  return (
    <main>
      <img className={styles.logo} src={logo} alt="Logo" />
      <input className={styles.input}></input>
      <div className={styles.buttons}>
        <button className={styles.button}>Поиск Moogle</button>
        <button className={styles.button}>Мне повезёт!</button>
      </div>
      <p className={styles.text}>Сервисы Moogle доступны на разных языках:
        <a className={styles.textLink} href="../App/App.js">English</a>
        <a className={styles.textLink} href="../App/App.js">Spain</a>
      </p>
    </main>
  )
}

export default Main;

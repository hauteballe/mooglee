import React from 'react';

import styles from './styles.module.css';
import RandomRectangle from './RandomRectangle';
import logo from './logo.png';
import usePresenter from './hooks/usePresenter';

const Main = () => {
  const {
    rectangleContent,
    setRectangleContent,
    isButtonClicked,
    onButtonClick,
    buttonText,
  } = usePresenter();

  return (
    <main>
      <img className={styles.logo} src={logo} alt='Logo' />
      <input className={styles.input}></input>
      <div className={styles.buttons}>
        <div className={styles.buttonsColumn}></div>
        <div className={styles.buttonsColumn}>
          <button className={styles.button}>Поиск Moogle</button>
        </div>
        <div className={styles.buttonsColumn}>
          <button
            className={styles.button}
            disabled={isButtonClicked}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
        <div className={styles.buttonsColumn}>
          <RandomRectangle
            value={rectangleContent}
            show={Boolean(rectangleContent)}
            onHide={() => setRectangleContent(null)}
          />
        </div>
      </div>
      <p className={styles.text}>
        Сервисы Moogle доступны на разных языках:
        <a className={styles.textLink} href='../App/App.js'>
          English
        </a>
        <a className={styles.textLink} href='../App/App.js'>
          Spain
        </a>
      </p>
    </main>
  );
};

export default Main;

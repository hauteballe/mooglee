import React, { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';
import logo from './logo.png';

const CloseIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

const RandomRectangle = ({ value, onHide, show }) => {
  const classes = classNames(styles.rectangle, {
    [styles.green]: value >= 700,
    [styles.yellow]: value > 300 && value < 700,
    [styles.red]: value <= 300,
  });

  return (
    <div>
      {show && (
        <div className={classes}>
          <button className={styles.iconButton} onClick={onHide}>
            <CloseIcon />
          </button>
          <span className={styles.randomNumber}>{value}</span>
        </div>
      )}
    </div>
  );
};

const Main = () => {
  const [rectangleContent, setRectangleContent] = useState(null);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const onButtonClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      setButtonClicked(false);
      setRectangleContent(Math.floor(Math.random() * 1000) + 1);
    }, 5000);
  };

  const getButtonText = () => {
    if (isButtonClicked) {
      return 'Хмм...';
    } else {
      return 'Мне повезёт!';
    }
  };

  console.log('Render component');

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
            {getButtonText()}
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

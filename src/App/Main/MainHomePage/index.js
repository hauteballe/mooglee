import React from 'react';
import { useState } from 'react';

import styles from './styles.module.css';
import RandomRectangle from '../RandomRectangle';
import usePresenter from '../hooks/usePresenter';
import Logo from '../../Logo';
import Input from '../../Input';

const MainHomePage = ({ enableSearchMode, isSearchModeEnabled, search }) => {
  const [inputValue, setInputValue] = useState('');

  const {
    rectangleContent,
    setRectangleContent,
    isButtonClicked,
    onButtonClick,
    buttonText,
  } = usePresenter();

  const onSearchButtonClick = () => {
    enableSearchMode();
    search(inputValue);
  };

  const onInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.mainWrapper}>
      <main className={styles.mainContainer}>
        <Logo size='regular' />
        <div className={styles.inputWrapper}>
          <Input inputValue={inputValue} onInput={onInput} />
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonsColumn}></div>
          <div className={styles.buttonsColumn}>
            <button className={styles.button} onClick={onSearchButtonClick}>
              Поиск Moogle
            </button>
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
    </div>
  );
};

export default MainHomePage;

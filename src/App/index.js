import React from 'react';

import styles from './styles.module.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header user='Ирина' />
      <Main />
      <Footer country='Беларусь' />
    </div>
  );
};

export default App;

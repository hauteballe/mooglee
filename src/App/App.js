import React from 'react';
import styles from './App.module.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

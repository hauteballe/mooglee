import React from 'react';

import styles from './styles.module.css';
import Header from '../../App/Header';
import Main from '../../App/Main';
import Footer from '../../App/Footer';
import usePresenter from './hooks/usePresenter';

const HomePage = () => {
  const {
    isSearchModeEnabled,
    disableSearchMode,
    enableSearchMode,
    searchResult,
    search,
    searchText,
  } = usePresenter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header
          user='Ирина'
          isSearchModeEnabled={isSearchModeEnabled}
          disableSearchMode={disableSearchMode}
          searchText={searchText}
        />
        <Main
          enableSearchMode={enableSearchMode}
          isSearchModeEnabled={isSearchModeEnabled}
          search={search}
          searchResult={searchResult}
        />
      </div>
      <Footer country='Беларусь' />
    </div>
  );
};

export default HomePage;

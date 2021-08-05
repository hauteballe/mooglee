import React from 'react';

import styles from './styles.module.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import useSearchMode from './hooks/useSearchMode';

const App = () => {
  const {
    isSearchModeEnabled,
    disableSearchMode,
    enableSearchMode,
    searchResult,
    search,
    searchText,
  } = useSearchMode();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header
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

export default App;

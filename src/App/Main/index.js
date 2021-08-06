import React from 'react';

import MainHomePage from './MainHomePage';
import MainSearchPage from './MainSearchPage';

const Main = ({
  enableSearchMode,
  isSearchModeEnabled,
  search,
  searchResult,
}) => {
  if (!isSearchModeEnabled) {
    return <MainHomePage enableSearchMode={enableSearchMode} search={search} />;
  } else {
    return <MainSearchPage searchResult={searchResult} />;
  }
};

export default Main;

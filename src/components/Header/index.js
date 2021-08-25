import React from 'react';

import DefaultHeader from './DefaultHeader';
import SearchHeader from './SearchHeader';

const Header = ({ isSearchModeEnabled, disableSearchMode, searchText }) => {
  if (!isSearchModeEnabled) {
    return <DefaultHeader />;
  } else {
    return (
      <SearchHeader
        disableSearchMode={disableSearchMode}
        searchText={searchText}
      />
    );
  }
};

export default Header;

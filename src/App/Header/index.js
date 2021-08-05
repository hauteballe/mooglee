import React from 'react';

import DefaultHeader from './DefaultHeader';
import SearchHeader from './SearchHeader';

const Header = ({
  user,
  isSearchModeEnabled,
  enableSearchMode,
  search,
  disableSearchMode,
  searchText,
}) => {
  if (!isSearchModeEnabled) {
    return <DefaultHeader user='Ирина' enableSearchMode={enableSearchMode} />;
  } else {
    return (
      <SearchHeader
        user='Ирина'
        enableSearchMode={enableSearchMode}
        disableSearchMode={disableSearchMode}
        search={search}
        searchText={searchText}
      />
    );
  }
};

export default Header;

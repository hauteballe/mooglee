import React from 'react';

import DefaultHeader from './DefaultHeader';
import SearchHeader from './SearchHeader';

const Header = ({
  user,
  isSearchModeEnabled,
  disableSearchMode,
  searchText,
}) => {
  if (!isSearchModeEnabled) {
    return <DefaultHeader user={user} />;
  } else {
    return (
      <SearchHeader
        user={user}
        disableSearchMode={disableSearchMode}
        searchText={searchText}
      />
    );
  }
};

export default Header;

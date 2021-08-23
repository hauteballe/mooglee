import React from 'react';
import { useSelector } from 'react-redux';

import DefaultHeader from './DefaultHeader';
import SearchHeader from './SearchHeader';

const Header = ({ isSearchModeEnabled, disableSearchMode, searchText }) => {
  const user = useSelector((state) => state.user);

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

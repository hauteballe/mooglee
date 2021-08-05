import React from 'react';

import Search from './Search';

const MainSearchPage = ({ searchResult }) => {
  return (
    <div>
      <Search searchResult={searchResult} />
    </div>
  );
};

export default MainSearchPage;

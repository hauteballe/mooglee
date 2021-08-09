import { useState } from 'react';

import { jsSearchResult } from '../../../const';

const usePresenter = () => {
  const [isSearchModeEnabled, setSearchModeEnabled] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  const enableSearchMode = () => {
    setSearchModeEnabled(true);
  };

  const disableSearchMode = () => {
    setSearchModeEnabled(false);
    setSearchResult([]);
  };

  const search = (text) => {
    setSearchText(text);
    if (text.toLowerCase() === 'javascript') {
      setSearchResult(jsSearchResult);
    } else {
      setSearchResult([]);
    }
  };

  return {
    isSearchModeEnabled,
    enableSearchMode,
    disableSearchMode,
    searchResult,
    search,
    searchText,
  };
};

export default usePresenter;

import React from 'react';

import styles from './styles.module.css';
import SearchItem from './SearchItem';

const Search = ({ searchResult }) => {
  return (
    <div className={styles.searchResultsWrapper}>
      <p className={styles.searchResultsNumber}>
        Найдено ссылок: {searchResult.length}
      </p>
      {searchResult.map((item, key) => (
        <SearchItem item={item} key={key} />
      ))}
    </div>
  );
};

export default Search;

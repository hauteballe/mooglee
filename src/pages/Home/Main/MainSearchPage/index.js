import React from 'react';

import SearchItem from './SearchItem';
import styles from './styles.module.css';

const MainSearchPage = ({ searchResult }) => {
  return (
    <div>
      <div className={styles.searchResultsWrapper}>
        <p className={styles.searchResultsNumber}>
          Найдено ссылок: {searchResult.length}
        </p>
        {searchResult.map((item, key) => (
          <SearchItem item={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default MainSearchPage;

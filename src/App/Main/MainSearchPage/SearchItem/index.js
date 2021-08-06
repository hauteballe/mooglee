import React from 'react';

import styles from './styles.module.css';

const SearchItem = ({ item }) => {
  return (
    <div className={styles.seachResult}>
      <a className={styles.searchResultTitle} href={item.link}>
        {item.title}
      </a>
      <p className={styles.searchResultDescription}>{item.description}</p>
    </div>
  );
};

export default SearchItem;

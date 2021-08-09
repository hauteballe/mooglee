import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const SearchItem = ({ item }) => {
  return (
    <div className={styles.seachResult}>
      <Link
        to={`/mooglee/article/${item.id}`}
        className={styles.searchResultTitle}
      >
        {item.title}
      </Link>
      <p className={styles.searchResultDescription}>{item.description}</p>
    </div>
  );
};

export default SearchItem;

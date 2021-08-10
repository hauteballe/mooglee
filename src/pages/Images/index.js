import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import usePresenter from './hooks/usePresenter';

const Images = () => {

  const { postImage  } = usePresenter();

  return (
    <div className={styles.articleWrapper}>
      <Link to='/mooglee' className={styles.homeButton}>
        Home
      </Link>
      <ul className={styles.posts}>
        <li className={styles.post}>
          <img src={postImage} alt="post" />
          <p>Description</p>
        </li>
      </ul>
    </div>
  );
};

export default Images;

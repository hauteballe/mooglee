import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import usePresenter from './hooks/usePresenter';

const Images = () => {
  const { posts, loading } = usePresenter();

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className={styles.imagesWrapper}>
      <Link to='/mooglee' className={styles.homeButton}>
        Home
      </Link>
      <ul className={styles.postsContainer}>
        {posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <img src={post.url} alt='post' className={styles.postImage} />
            <p className={styles.postTitle}>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;

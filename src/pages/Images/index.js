import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import usePresenter from './hooks/usePresenter';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Logo from '../Home/components/Logo';

const Images = () => {
  const { posts, loading, error } = usePresenter();

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerWrapper}>
        <Link to='/mooglee'>
          <div className={styles.headerLogo}>
            <Logo size='small'></Logo>
          </div>
        </Link>
        <Header />
      </div>
      {error && <p>{error}</p>}
      <ul className={styles.postsContainer}>
        {posts.map((post) => (
          <li key={post.id} className={styles.post}>
            <img
              src={post.urls.small}
              alt='post'
              className={styles.postImage}
            />
            <p className={styles.postTitle}>{post.title}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Images;

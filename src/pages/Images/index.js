import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import usePresenter from './hooks/usePresenter';
import Footer from '../Home/components/Footer';
import Header from '../Home/components/Header';
import Logo from '../Home/components/Logo';

const Images = () => {
  const { posts, loading, error } = usePresenter();

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.headerWrapper}>
          <Link to='/mooglee'>
            <div className={styles.headerLogo}>
              <Logo size='small'></Logo>
            </div>
          </Link>
          <Header />
        </div>
        <div className={styles.loading}>
          <p>Loading ...</p>
        </div>
        <Footer className={styles.loadingFooter} />
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

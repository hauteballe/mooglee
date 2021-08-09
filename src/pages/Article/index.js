import React from 'react';
import {
  Link
} from "react-router-dom";

import usePresenter from './hooks/usePresetner';
import styles from './styles.module.css';


const Article = () => { 
  const { item } = usePresenter();

  if (!item) {
    return <p>Loading ...</p>
  }

return (
  <div className={styles.articleWrapper}> 
    <Link to="/" className={styles.homeButton}>Home</Link>
    <h3 className={styles.articleTitle}>{item.title}</h3>
    <p className={styles.articleDescription}>{item.description}</p>
  </div>
)
}

export default Article;
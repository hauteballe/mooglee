import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <span>Беларусь</span>
            </div>
            <div className={styles.footerContainer}>
            <span>Реклама</span>
            <span>Для Бизнеса</span>
            <span>Все о Moogle</span>
            <span>Как работает Поиск</span>
            </div>
        </footer>
    ) 
}

export default Footer;
import React from 'react';
import styles from './styles.module.scss';
import MockImage from '../../assets/icons/mock-image.svg';

const ContentCard = () => {
  return (
    <div className={styles.card}>
      <img alt="image" src={MockImage} />
      <span className={styles.title}>Name</span>
      <span className={styles.title}>Name Country</span>
    </div>
  );
};

export default ContentCard;

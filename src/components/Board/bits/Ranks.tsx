import React from 'react';
import styles from '../styles.module.scss'

interface IRanks {
  ranks: number[];
}

const Ranks = ({ ranks }: IRanks) => {
  return (
    <div className={styles.ranks}>
      {ranks.map((rank) => (
        <span  key={rank}>{rank}</span>
      ))}
    </div>
  );
};

export default Ranks;

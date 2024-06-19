import React from 'react';
import styles from './styles.module.scss';
import { getCharacter } from '../../helper/helper';
import Ranks from './bits/Ranks';
import Files from './bits/Files';
import Pieces from './pieces/index';

const Board = () => {
  const ranks = Array(8)
    .fill(null)
    .map((_, i: number) => 8 - i);
  const files = Array(8)
    .fill(null)
    .map((_, i: number) => getCharacter(i + 1));

  const getClassName = (rank: number, file: number) => {
    return (rank + file) % 2 === 0 ? styles['tile--dark'] : styles['tile--light'];
  };

  return (
    <div className={styles.box}>
      <div className={styles.board}>
        <Ranks ranks={ranks} />
        <div className={styles.tiles}>
          {ranks.map((rank: number, i: number) =>
            files.map((file: string, j: number) => (
              <div className={getClassName(9 - i, j)} key={j}>
                {/* {rank}
              {file} */}
              </div>
            ))
          )}
        </div>
        <Pieces />
        <Files files={files} />
      </div>
    </div>
  );
};

export default Board;

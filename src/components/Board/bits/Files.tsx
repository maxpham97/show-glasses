import React from 'react';
import styles from '../styles.module.scss'

interface IFiles {
  files: string[];
}

const Files = ({ files }: IFiles) => {
  return (
    <div className={styles.files}>
      {files.map((file) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  );
};

export default Files;

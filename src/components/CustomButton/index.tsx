import React from 'react';
import styles from './styles.module.scss';

interface ICustomButton {
  title: string;
  onClick: () => void;
  width?: string;
}

const CustomButton = ({ title, width, onClick }: ICustomButton) => {
  return (
    <button
      onClick={onClick}
      className={styles.customButton}
      style={{ width: width ? width : '188px' }}>
      {title}
    </button>
  );
};

export default CustomButton;

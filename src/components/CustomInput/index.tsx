import React from 'react';
import styles from './styles.module.scss';

interface ICustomInput {
  placeHolder: string;
  style?: React.CSSProperties;
  errorMessage?: string;
  type?: string;
  onChange: (value: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const CustomInput = ({ placeHolder, errorMessage, style, type, onChange, value }: ICustomInput) => {
  return (
    <div style={style} className={styles.flexBox}>
      <input value={value} onChange={onChange} type={type ? type : 'text'} placeholder={placeHolder} className={styles.customInput} />
      <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  );
};

export default CustomInput;

import React from 'react';
import styles from './styles.module.scss';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import SearchIcon from '../../assets/icons/filter-search.svg';

export interface IDataItem {
  title: string;
  value: string;
}

interface IFilter {
  title: string;
  data: IDataItem[];
  hideSearch?: boolean;
}

const Filter = ({ title, data, hideSearch = true }: IFilter) => {
  return (
    <div>
      <div className={styles.flexBox}>
        <span className={styles.title}>{title}</span>
        <img alt="arrow" src={ArrowRight} />
      </div>
      {hideSearch && (
        <div className={styles.inputContainer}>
          <img src={SearchIcon} alt="search-icon" />
          <input className={styles.input} />
        </div>
      )}
      <div className={styles.checkContent}>
        {data.map((item: IDataItem) => (
          <div style={{ display: 'flex', gap: 10 }} key={item.value}>
            <input value={item.value} type="checkbox" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Filter;

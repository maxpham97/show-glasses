import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import Filter, { IDataItem } from '../../components/Filter';
import ContentCard, { IProduct } from '../../components/ContentCard';
import Refresh from '../../assets/icons/refresh.svg';
import { mockData } from './mockData';

const HomePage = () => {
  const { t } = useTranslation();

  const continent: IDataItem[] = [
    {
      title: t('Africa'),
      value: t('Africa'),
    },
    {
      title: t('Antarctica'),
      value: t('Antarctica'),
    },
    {
      title: t('Asia'),
      value: t('Asia'),
    },
    {
      title: t('Australia'),
      value: t('Australia'),
    },
    {
      title: t('Europe'),
      value: t('Europe'),
    },
    {
      title: t('NorthAmerica'),
      value: t('NorthAmerica'),
    },
    {
      title: t('SouthAmerica'),
      value: t('SouthAmerica'),
    },
  ];
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className={styles.title}>{t('Glasses')}</span>
        <span className={styles.title}>{t('World')}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.flex}>
          <Filter title={t('Continent')} data={continent} />
          <Filter title={t('Continent')} data={continent} />
        </div>
        <div className={styles.grid}>
          {mockData.map((item: IProduct, index: number) => (
            <ContentCard {...item} key={index} />
          ))}
        </div>
      </div>

      <div className={styles.showMoreContainer}>
        <img alt="refresh" src={Refresh} />
        <span>{t('showMore')}</span>
      </div>
    </div>
  );
};

export default HomePage;

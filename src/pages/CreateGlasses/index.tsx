import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import Filter, { IDataItem } from '../../components/Filter';

const CreateGlasses = () => {
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
    <div className={styles.container}>
      <span className={styles.title}>{t('AddGlasses')}</span>
      <div className={styles.content}>
        <div className={styles.drag}></div>
        <div className={styles.filtres}>
          <Filter hideSearch={false} title={t('Continent')} data={continent} />
        </div>
      </div>
    </div>
  );
};

export default CreateGlasses;

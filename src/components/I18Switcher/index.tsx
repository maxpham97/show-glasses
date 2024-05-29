import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = React.useState<string>(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };
  return (
    <div>
      <button
        onClick={() => changeLanguage('en')}
        className={classNames(styles.button, {
          [styles.inactive]: currentLanguage !== 'en',
        })}>
        EN
      </button>
      <button
        onClick={() => changeLanguage('uk')}
        className={classNames(styles.button, {
          [styles.inactive]: currentLanguage !== 'uk',
        })}>
        УКР
      </button>
    </div>
  );
};

export default LanguageSwitch;

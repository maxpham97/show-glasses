import { ReactNode } from 'react';
import styles from './styles.module.scss';
import LanguageSwitch from '../I18Switcher';
import SearchIcon from '../../assets/icons/search.svg';
import { useTranslation } from 'react-i18next';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { t } = useTranslation();
  return (
    <div className={styles.layout}>
      <nav className={styles.navBar}>
        <span className={styles.logo}>{t('Logo')}</span>
        <LanguageSwitch />
        <div className={styles.inputContainer}>
          <img alt="icon" src={SearchIcon} />
          <input className={styles.searchInput} />
        </div>
        <button className={styles.loginButton}>{t('Login')}</button>
      </nav>
      {children}
    </div>
  );
};

export default Layout;

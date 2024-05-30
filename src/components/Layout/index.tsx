import { ReactNode } from 'react';
import styles from './styles.module.scss';
import LanguageSwitch from '../I18Switcher';
import { useTranslation } from 'react-i18next';
import useAuth from '../../hooks/useAuth';
import CustomSearchInput from '../CustomSearchInput';
import CustomButton from '../CustomButton';
import { useNavigate } from 'react-router-dom';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { t } = useTranslation();
  const { user, handleSignIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <nav className={styles.navBar}>
        <div className={styles.flexBox}>
          <span onClick={() => navigate('/home')} className={styles.logo}>
            {t('Logo')}
          </span>
          <LanguageSwitch />
        </div>
        <span className={styles.map}>{t('Map')}</span>
        <div style={{ gap: 20 }} className={styles.flexBox}>
          <CustomSearchInput />
          {user ? (
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <span className={styles.userName}>
                {'Welcome '} {user}
              </span>
              <CustomButton
                onClick={() => navigate('/createGlasses')}
                title={t('CreatedGlasses')}
              />
            </div>
          ) : (
            <button
              onClick={() => {
                handleSignIn();
                // notify();
              }}
              className={styles.loginButton}>
              {t('Login')}
            </button>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;

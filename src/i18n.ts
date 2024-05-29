import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                Login: 'Login',
                Logo: 'Glasses',
                Glasses: 'Glasses',
                World: ' from all over the world',
                Continent: 'Continent',
                Africa: 'Africa',
                Antarctica: 'Antarctica',
                Asia: 'Asia',
                Australia: 'Australia',
                Europe: 'Europe',
                NorthAmerica: 'North America',
                SouthAmerica: 'South America',
                showMore: 'Show more',
                AddGlasses: 'Add new glasses',
            },
        },
        uk: {
            translation: {
                Login: 'Увійти',
                Logo: 'Рюмки',
                Glasses: 'Рюмочки',
                World: ' з усіх кінців світу!',
                Continent: 'Континент',
                Africa: 'Африка',
                Antarctica: 'Австралія',
                Asia: 'Азія',
                Australia: 'Australia',
                Europe: 'Європа',
                NorthAmerica: 'Північна Америка',
                SouthAmerica: 'Південна Америка',
                showMore: 'Показати ще',
                AddGlasses: 'Додати новеньку рюмочку',
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

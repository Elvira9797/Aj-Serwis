import ukrFlag from '../assets/png/ua.png';
import polFlag from '../assets/png/pl.png';
import engFlag from '../assets/png/eng.png';

interface LanguageData {
  key: string;
  value: string;
  name: string;
}

export const dataLang: LanguageData[] = [
  { name: 'ENG', value: engFlag, key: 'en' },
  { name: 'POL', value: polFlag, key: 'pl' },
  { name: 'UKR', value: ukrFlag, key: 'ua' },
];

import ukrFlag from '../assets/png/ua.png';
import polFlag from '../assets/png/pl.png';
import engFlag from '../assets/png/eng.png';

interface LanguageData {
  key: string;
  value: string;
}

export const dataLang: LanguageData[] = [
  { key: 'ENG', value: engFlag }, //default lang
  { key: 'POL', value: polFlag },
  { key: 'UKR', value: ukrFlag },
];

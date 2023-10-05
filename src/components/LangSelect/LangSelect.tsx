import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import {
  CustomSelectContainer,
  CustomSelectImage,
  Select,
  SelectOption,
} from './LangSelect.styled';
import { dataLang } from '../../common/dataLang';
import { useAppContext } from '../../context/AppContext';

const LangSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const res = i18n.resolvedLanguage;
  const query = searchParams.get('lang') || '';
  const { saveScrollPosition, restoreScrollPosition } = useAppContext();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;

    saveScrollPosition();

    setSearchParams({ lang: selectedLanguage });
  };

  useEffect(() => {
    restoreScrollPosition();

    i18n.changeLanguage(query);
  }, [i18n, query, restoreScrollPosition]);

  return (
    <CustomSelectContainer>
      <CustomSelectImage
        style={{
          backgroundImage: `url(${
            dataLang.find(lang => lang.key === res)?.value
          })`,
        }}
      ></CustomSelectImage>
      <Select value={res} onChange={handleSelectChange}>
        {dataLang.map(lang => (
          <SelectOption key={lang.key} value={lang.key}>
            {lang.name}
          </SelectOption>
        ))}
      </Select>
    </CustomSelectContainer>
  );
};

export default LangSelect;

import React, { useState, useEffect } from 'react';
import {
  CustomSelectContainer,
  CustomSelectImage,
  Select,
  SelectOption,
} from './LangSelect.styled';

import { dataLang } from '../../common/dataLang';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const LangSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('lang') ?? '';

  const [selectedValue, setSelectedValue] = useState<string>(
    query ?? localStorage.getItem('selectedLang')
  );

  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('selectedLang', selectedValue);
    i18n.changeLanguage(selectedValue);
    if (selectedValue) navigate(`?lang=${selectedValue}`);
  }, [selectedValue, i18n]);

  const selectedImage = dataLang.find(
    lang => lang.key === selectedValue
  )?.value;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;

    setSearchParams({ lang: selectedLanguage });
    setSelectedValue(selectedLanguage);
  };

  return (
    <CustomSelectContainer>
      <CustomSelectImage
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      ></CustomSelectImage>
      <Select value={selectedValue} onChange={handleSelectChange}>
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

import React, { useState, useEffect } from 'react';
import {
  CustomSelectContainer,
  CustomSelectImage,
  Select,
  SelectOption,
} from './LangSelect.styled';

import { dataLang } from '../../common/dataLang';
import { useTranslation } from 'react-i18next';

const LangSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem('selectedLang') || dataLang[0].key
  );
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem('selectedLang', selectedValue);
  }, [selectedValue]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const selectedImage = dataLang.find(
    lang => lang.key === selectedValue
  )?.value;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <CustomSelectContainer>
      <CustomSelectImage
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      ></CustomSelectImage>
      <Select
        value={selectedValue}
        onChange={e => {
          handleSelectChange(e);
          changeLanguage(e);
        }}
      >
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

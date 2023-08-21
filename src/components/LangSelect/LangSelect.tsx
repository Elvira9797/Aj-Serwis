import React, { useState, useEffect } from 'react';
import {
  CustomSelectContainer,
  CustomSelectImage,
  Select,
  SelectOption,
} from './LangSelect.styled';

import { dataLang } from '../../common/dataLang';

const LangSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem('selectedLang') || `${dataLang[0]}`
  );

  useEffect(() => {
    localStorage.setItem('selectedLang', selectedValue);
  }, [selectedValue]);

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
      <Select value={selectedValue} onChange={handleSelectChange}>
        {dataLang.map(lang => (
          <SelectOption key={lang.key} value={lang.key}>
            {lang.key}
          </SelectOption>
        ))}
      </Select>
    </CustomSelectContainer>
  );
};

export default LangSelect;

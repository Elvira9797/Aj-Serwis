import { useState, useEffect } from 'react';
import {
  CustomSelectContainer,
  CustomSelectImage,
  Select,
  SelectOption,
} from './LangSelect.styled';

import uaFlag from '../../assets/png/ua.png';
import plFlag from '../../assets/png/pl.png';
import engFlag from '../../assets/png/eng.png';

const LangSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    localStorage.getItem('selectedLang') || '1'
  );

  useEffect(() => {
    localStorage.setItem('selectedLang', selectedValue);
  }, [selectedValue]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  let selectedImage;
  if (selectedValue === '1') {
    selectedImage = engFlag;
  } else if (selectedValue === '2') {
    selectedImage = plFlag;
  } else if (selectedValue === '3') {
    selectedImage = uaFlag;
  }

  return (
    <CustomSelectContainer>
      <CustomSelectImage
        style={{
          backgroundImage: `url(${selectedImage})`,
        }}
      ></CustomSelectImage>
      <Select value={selectedValue} onChange={handleSelectChange}>
        <SelectOption value="1">ENG</SelectOption>
        <SelectOption value="2">POL</SelectOption>
        <SelectOption value="3">UKR</SelectOption>
      </Select>
    </CustomSelectContainer>
  );
};

export default LangSelect;

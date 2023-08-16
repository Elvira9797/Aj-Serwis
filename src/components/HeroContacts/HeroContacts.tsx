import React from 'react';
import {
  ButtonStyled,
  HeroTitle,
  HeroUnderTitle,
  Overlay,
  TextButton,
} from './HeroContacts.styled';

const HeroContacts: React.FC = () => {
  return (
    <Overlay>
      <HeroTitle>Connect with us</HeroTitle>
      <HeroUnderTitle>
        Let us assist you with expert advice and find the right vacancy for you
      </HeroUnderTitle>
      <ButtonStyled>
        <TextButton>Contact us</TextButton>
      </ButtonStyled>
    </Overlay>
  );
};

export default HeroContacts;

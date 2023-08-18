import React from 'react';
import { StyledFooterBottomBar } from './FooterBottomBar.styled';
import { BiCopyright } from 'react-icons/bi';

const FooterBottomBar: React.FC = () => {
  return (
    <StyledFooterBottomBar>
      2023 <BiCopyright />
      Created by
      <a href="/home">SevenTy inc</a>
    </StyledFooterBottomBar>
  );
};

export default FooterBottomBar;

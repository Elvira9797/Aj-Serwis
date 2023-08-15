import React from 'react';
import logo from '../../images/LogoHeader.png';
import { StyledImg, StyledLogo, StyledLogoText } from './Logo.styled';

interface LogoProps {
  loc: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ loc }) => {
  return (
    <StyledLogo to="/">
      <StyledImg src={logo} alt="AJ SERWIS Logo" />
      <StyledLogoText loc={loc}>
        <span>AJ</span>
        <span>SERWIS</span>
      </StyledLogoText>
    </StyledLogo>
  );
};

export default Logo;

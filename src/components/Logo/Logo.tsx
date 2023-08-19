import React from 'react';
import logo from '../../assets/png/LogoHeader.png';
import { StyledImg, StyledLogo, StyledLogoText } from './Logo.styled';

interface LogoProps {
  loc: 'header' | 'footer';
  size: 'lg' | 'md';
}

const Logo: React.FC<LogoProps> = ({ loc, size }) => {
  return (
    <StyledLogo to="/">
      <StyledImg src={logo} alt="AJ SERWIS Logo" size={size} loc={loc} />
      <StyledLogoText loc={loc} size={size}>
        <span>AJ</span>
        <span>SERWIS</span>
      </StyledLogoText>
    </StyledLogo>
  );
};

export default Logo;

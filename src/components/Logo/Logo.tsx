import logo from '../../images/LogoHeader.png';
import { StyledLogo, StyledLogoText } from './Logo.styled';

function Logo() {
  return (
    <StyledLogo href="#">
      <img src={logo} width="50" />
      <StyledLogoText>
        <span>AJ</span>
        <span>SERWIS</span>
      </StyledLogoText>
    </StyledLogo>
  );
}

export default Logo;

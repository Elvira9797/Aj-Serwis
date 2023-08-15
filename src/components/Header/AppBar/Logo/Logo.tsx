import logo from '../../../../images/LogoHeader.png';
import { StyledLogo, StyledLogoText } from './Logo.styled';

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={logo} alt="AJ SERWIS Logo" width="50" />
      <StyledLogoText>
        <span>AJ</span>
        <span>SERWIS</span>
      </StyledLogoText>
    </StyledLogo>
  );
};

export default Logo;

import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  StyledNavWrader,
  StyledSocLinkWraper,
  StyledTopBar,
} from './TopBar.styled';

const TopBar: React.FC = () => {
  return (
    <StyledTopBar>
      <StyledNavWrader>
        <a href="mailto:aj.serwis.spzoo@gmail.com">aj.serwis.spzoo@gmail.com</a>
      </StyledNavWrader>

      <StyledSocLinkWraper>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram aria-label="Instagram" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook aria-label="Facebook" />
        </a>
        <a
          href="https://telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane aria-label="Telegram" />
        </a>
      </StyledSocLinkWraper>
    </StyledTopBar>
  );
};

export default TopBar;

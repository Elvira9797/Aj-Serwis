import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  StyledNavWrader,
  StyledSocLinkWraper,
  StyledTopBar,
} from './TopBar.styled';

function TopBar() {
  return (
    <StyledTopBar>
      <StyledNavWrader>
        <a href="#">aj.serwis.spzoo@gmail.com</a>
      </StyledNavWrader>

      <StyledSocLinkWraper>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillFacebook />
        </a>
        <a href="#">
          <FaTelegramPlane />
        </a>
      </StyledSocLinkWraper>
    </StyledTopBar>
  );
}

export default TopBar;

import { StyledSocLinkWraper } from './Soclink.styled';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

interface SoclinkProps {
  iconSize?: number;
}

const Soclink: React.FC<SoclinkProps> = ({ iconSize = 24 }) => {
  return (
    <StyledSocLinkWraper>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <AiFillInstagram
          aria-label="Instagram"
          size={iconSize}
          style={{ color: '#c43196' }}
          className="icon"
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <AiFillFacebook
          aria-label="Facebook"
          size={iconSize}
          style={{ color: 'blue' }}
          className="icon"
        />
      </a>
      <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
        <FaTelegram
          aria-label="Telegram"
          size={iconSize}
          style={{ color: 'blue' }}
          className="icon"
        />
      </a>
    </StyledSocLinkWraper>
  );
};

export default Soclink;

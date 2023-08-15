import {
  SocialLink,
  SocialList,
  SocialListItem,
} from './SocialMediaLink.styled';
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';

interface SocialMediaProps {
  iconSize?: number;
}

const SocialMediaLink: React.FC<SocialMediaProps> = ({ iconSize = 22 }) => {
  return (
    <SocialList>
      <SocialListItem>
        <SocialLink
          href="https://www.facebook.com/Vasyl.moiseiko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
    </SocialList>
  );
};

export default SocialMediaLink;

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
        <SocialLink
          href="https://t.me/Martin0975"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink
          href="https://wa.me/+48539649808"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
      <SocialListItem>
        <SocialLink
          href="https://instagram.com/aj_serwis_sp_z_o_o?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={iconSize} color="white" />
        </SocialLink>
      </SocialListItem>
    </SocialList>
  );
};

export default SocialMediaLink;

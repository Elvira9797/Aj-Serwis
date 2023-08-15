import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import {
  HeroTitle,
  HeroUnderTitle,
  Overlay,
  SocialLink,
  SocialList,
  SocialListItem,
} from './Hero.styled';
import { theme } from '../../common/theme';
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/vacancies');
  };

  return (
    <Overlay>
      <HeroTitle>Aj Serwis</HeroTitle>
      <HeroUnderTitle>
        Effortlessly find job opportunities in Poland. Experience a fast and
        efficient job search process.
      </HeroUnderTitle>
      <Button
        variant="primary"
        size="md"
        type="button"
        onClick={handleButtonClick}
        style={{
          backgroundColor: theme.colors.accentColor,
          fontSize: '16px',
          paddingLeft: '30px',
          paddingRight: '30px',
          paddingTop: '15px',
          paddingBottom: '15px',
          borderRadius: '8px',
          border: 'none',
        }}
      >
        Переглянути вакансії
      </Button>
      <SocialList>
        <SocialListItem>
          <SocialLink
            href="https://www.facebook.com/Vasyl.moiseiko"
            target="_blank"
          >
            <FaFacebookF size={22} color="white" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="#">
            <FaTelegramPlane size={22} color="white" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="#">
            <FaWhatsapp size={22} color="white" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink href="#">
            <FaInstagram size={22} color="white" />
          </SocialLink>
        </SocialListItem>
      </SocialList>
    </Overlay>
  );
};

export default Hero;

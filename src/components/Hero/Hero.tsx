import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { HeroTitle, HeroUnderTitle, Overlay } from './Hero.styled';
import { theme } from '../../common/theme';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const Hero: React.FC = () => {
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
        View job vacancies
      </Button>
      <SocialMediaLink />
    </Overlay>
  );
};

export default Hero;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { HeroTitle, HeroUnderTitle, Overlay } from './Hero.styled';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const underTitleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600,
  });

  const handleButtonClick = () => {
    navigate('/vacancies');
  };

  return (
    <Overlay>
      <animated.div style={titleSpring}>
        <HeroTitle>{t('main.hero.title')}</HeroTitle>
      </animated.div>
      <animated.div style={underTitleSpring}>
        <HeroUnderTitle>{t('main.hero.heroUnderTitle')}</HeroUnderTitle>
      </animated.div>
      <animated.div style={buttonSpring}>
        <Button variant="hero" type="button" onClick={handleButtonClick}>
          {t('main.hero.button')}
        </Button>
      </animated.div>
      <SocialMediaLink />
    </Overlay>
  );
};

export default Hero;

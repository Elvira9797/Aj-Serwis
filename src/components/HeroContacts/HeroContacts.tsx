import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';
import { HeroTitle, HeroUnderTitle, Overlay } from './HeroContacts.styled';
import Button from '../Button/Button';

const HeroContacts: React.FC = () => {
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

  return (
    <Overlay>
      <animated.div style={titleSpring}>
        <HeroTitle>{t('contacts.hero.title')}</HeroTitle>
      </animated.div>
      <animated.div style={underTitleSpring}>
        <HeroUnderTitle>{t('contacts.hero.heroUnderTitle')}</HeroUnderTitle>
      </animated.div>
      <Link to="contactUs" smooth={true} duration={1000}>
        <animated.div style={buttonSpring}>
          <Button variant="hero">{t('contacts.hero.button')}</Button>
        </animated.div>
      </Link>
    </Overlay>
  );
};

export default HeroContacts;

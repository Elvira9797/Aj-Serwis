import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { HeroTitle, HeroUnderTitle, Overlay } from './Hero.styled';
import SocialMediaLink from '../SocialMediaLink/SocialMediaLink';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  // Визначення анімацій за допомогою react-spring
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
        <HeroTitle>Aj Serwis</HeroTitle>
      </animated.div>
      <animated.div style={underTitleSpring}>
        <HeroUnderTitle>
          Effortlessly find job opportunities in Poland. Experience a fast and
          efficient job search process.
        </HeroUnderTitle>
      </animated.div>
      <animated.div style={buttonSpring}>
        <Button
          variant="hero"
          onClick={handleButtonClick}
          style={{
            // backgroundColor: theme.colors.accentColor,
            // color: 'white',
            border: 'none',
          }}
        >
          View job vacancies
        </Button>
      </animated.div>
      <SocialMediaLink />
    </Overlay>
  );
};

export default Hero;

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';
import {
  ButtonStyled,
  HeroTitle,
  HeroUnderTitle,
  Overlay,
  TextButton,
} from './HeroContacts.styled';

const HeroContacts: React.FC = () => {
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
        <HeroTitle>Connect with us</HeroTitle>
      </animated.div>
      <animated.div style={underTitleSpring}>
        <HeroUnderTitle>
          Let us assist you with expert advice and find the right vacancy for
          you
        </HeroUnderTitle>
      </animated.div>
      <Link to="contactUs" smooth={true} duration={1000}>
        <animated.div style={buttonSpring}>
          <ButtonStyled>
            <TextButton>Contact us</TextButton>
          </ButtonStyled>
        </animated.div>
      </Link>
    </Overlay>
  );
};

export default HeroContacts;

import { useEffect, useState } from 'react';

import { StyledNavWrader, StyledTopBar } from './TopBar.styled';
import Soclink from '../../Soclink/Soclink';

const TopBar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledTopBar isVisible={isTop}>
      <StyledNavWrader>
        <a href="mailto:aj.serwis.spzoo@gmail.com">aj.serwis.spzoo@gmail.com</a>
      </StyledNavWrader>
      <Soclink />
    </StyledTopBar>
  );
};

export default TopBar;

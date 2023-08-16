import { useEffect, useState } from 'react';

import { StyledNavWrader, StyledTopBar } from './TopBar.styled';
import { BiMailSend } from 'react-icons/bi';

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
        <BiMailSend />
        <a href="mailto:aj.serwis.spzoo@gmail.com">aj.serwis.spzoo@gmail.com</a>
      </StyledNavWrader>
      <p>Working hours: Mon-Fri from 8:00 AM to 7:00 PM.</p>
    </StyledTopBar>
  );
};

export default TopBar;

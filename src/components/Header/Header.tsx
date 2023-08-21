import { useEffect, useState } from 'react';

import AppBar from './AppBar/AppBar';
import TopBar from './TopBar/TopBar';
import MobileMenu from './MobileMneu/MobileMenu';

import { theme } from '../../common/theme';
import { StyledHeader } from './Header.styled';

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [headerStyle, setHeaderStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const scrollingDown =
        prevScrollPosition < currentScrollPosition &&
        currentScrollPosition > 100;

      setScrolling(scrollingDown);
      setPrevScrollPosition(currentScrollPosition);

      const headerStyleAfterScroll = {
        transition: 'transform 1s ease-in-out',
        transform: scrollingDown ? 'translateY(-100%)' : 'translateY(0)',
      };

      setHeaderStyle(headerStyleAfterScroll);
    };

    const cleanupScroll = () => {
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return cleanupScroll;
  }, [prevScrollPosition, scrolling]);

  return (
    <StyledHeader style={headerStyle}>
      <TopBar />
      <AppBar theme={theme} />
      <MobileMenu theme={theme} />
    </StyledHeader>
  );
};

export default Header;

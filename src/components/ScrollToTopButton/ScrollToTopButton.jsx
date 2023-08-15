import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';
import { ReactComponent as ButtonToTop } from '../../img/chevron-up.svg';
import { BtnToTop } from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTrigger = 400;
    setIsVisible(scrollY > scrollTrigger);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <BtnToTop
      className={`Btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ButtonToTop />
    </BtnToTop>
  );
};

export default ScrollToTopButton;

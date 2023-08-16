import throttle from 'lodash.throttle';
import React, { useEffect, useState } from 'react';
import { ReactComponent as ButtonToTop } from '../../img/chevron-up.svg';
import { BtnToTop } from './ScrollToTopButton.styled';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollTrigger = 400;
    setIsVisible(scrollY > scrollTrigger);
  };

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 300);
    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
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

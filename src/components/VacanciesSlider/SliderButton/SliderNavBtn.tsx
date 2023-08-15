import { useSwiper } from 'swiper/react';

import { ReactComponent as RightArrowSvg } from '../svg/rightArrow.svg';
import { ReactComponent as LeftArrowSvg } from '../svg/leftArrow.svg';
import { StyledNavWrap } from './SliderNavBtn.styled';

interface ISliderNavBtn {
  navTo: 'prev' | 'next';
}

export const SliderNavBtn: React.FC<ISliderNavBtn> = ({ navTo }) => {
  const swiper = useSwiper();

  return (
    <StyledNavWrap
      onClick={() => {
        navTo === 'prev' ? swiper.slidePrev() : swiper.slideNext();
      }}
    >
      {navTo === 'prev' ? <LeftArrowSvg /> : <RightArrowSvg />}
    </StyledNavWrap>
  );
};

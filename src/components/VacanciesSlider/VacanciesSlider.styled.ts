import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
export const StyledSwiper = styled(Swiper)`
  padding-top: 20px;
  padding-bottom: 20px;

  & .swiper-wrapper {
    z-index: -1;
  }
`;

export const StyledSliderNavWrap = styled.div`
  width: 100%;
  left: 50%;
  bottom: 150px;
  transform: translateX(-50%);

  position: absolute;
  margin: 0px auto;
  max-width: 1200px;
  height: 0px;
  display: flex;
  justify-content: space-between;
`;

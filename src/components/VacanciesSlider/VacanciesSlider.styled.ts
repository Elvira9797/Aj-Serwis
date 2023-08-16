import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { theme } from '../../common/theme';
export const StyledSwiper = styled(Swiper)`
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;

  & .swiper-wrapper {
    z-index: -1;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    color: ${props => props.theme.colors.accentColor};
    top: 50%;
  }

  & .swiper-button-prev {
    left: 0;
  }
  & .swiper-button-next {
    right: 0;
  }
  & .swiper-pagination-bullets {
    top: auto;
    bottom: -5px;
  }

  & .swiper-pagination-bullet-active {
    background-color: #333;
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

export const StyledSliderSection = styled.section`
  padding-top: ${theme.section.padding.large.paddingTop};
  /* padding-bottom: ${theme.section.padding.large.paddingBottom}; */
`;

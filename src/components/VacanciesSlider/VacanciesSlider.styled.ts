import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { theme } from '../../common/theme';
export const StyledSwiper = styled(Swiper)`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 60px;
  padding-top: 20px;

  & .swiper-wrapper {
    z-index: -1;
  }

  & .swiper-button-prev,
  .swiper-button-next {
    color: ${theme.colors.primaryColor};
    top: 95%;
  }

  & .swiper-button-prev {
    left: 20%;
  }
  & .swiper-button-next {
    right: 20%;
  }
  & .swiper-pagination-bullets {
    top: auto;
    bottom: 7.5%;
  }

  & .swiper-pagination-bullet-active {
    background-color: ${theme.colors.primaryColor};
  }

  & .swiper-pagination {
    height: 0;
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
  padding-top: ${theme.section.padding.small.paddingTop};
  padding-bottom: ${theme.section.padding.small.paddingBottom};
  background-color: ${theme.colors.bgColor};

  @media (min-width: 768px) {
    padding-top: ${theme.section.padding.medium.paddingTop};
    padding-bottom: ${theme.section.padding.medium.paddingBottom};
  }
`;

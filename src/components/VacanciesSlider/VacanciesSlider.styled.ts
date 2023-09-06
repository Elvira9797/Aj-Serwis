import styled from '@emotion/styled';
import { Swiper, SwiperProps } from 'swiper/react';
import { theme } from '../../common/theme';

interface ExtendedStyledSwiperProps extends SwiperProps {
  pagination?: {
    clickable: boolean;
  };
  navigation?: boolean;
  loop: boolean;
  slidesPerView: number | 'auto' | undefined;
  modules: any;
  breakpoints: {
    320: {
      slidesPerView: number;
      spaceBetween: number;
      slidesPerGroup: number;
    };
    768: {
      slidesPerView: number;
      spaceBetween: number;
      slidesPerGroup: number;
    };
    1200: {
      slidesPerView: number;
      spaceBetween: number;
      slidesPerGroup: number;
    };
  };
}

export const StyledSwiper = styled(Swiper)<ExtendedStyledSwiperProps>`
  &.swiper-initialized.swiper-horizontal {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 60px;
    padding-top: 20px;
  }

  & .swiper-slide.swiper-slide-active img {
    @media (max-width: 1199px) {
      transform: scale(1.05);
      transition: all 1000ms, filter 1000ms ease-in-out;
      filter: brightness(100%);
    }
  }
  & .swiper-slide.swiper-slide-next img {
    @media (min-width: 768px) and (max-width: 1199px) {
      transform: scale(1.05);
      transition: all 1000ms, filter 1000ms ease-in-out;
      filter: brightness(100%);
    }
  }

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
  &.swiper-initialized.swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
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
  background-color: ${theme.colors.bgColor};
  padding-top: ${({ theme }) => theme.section.padding.small.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.small.paddingBottom};
  @media (min-width: 1236px) {
    padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
    padding-bottom: ${({ theme }) =>
      theme.section.padding.medium.paddingBottom};
  }
`;

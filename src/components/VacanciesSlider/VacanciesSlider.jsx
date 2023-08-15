import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Mousewheel } from 'swiper/modules';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { vacancies } from '../../common/vacanciesArr';
import VacancyItem from '../VacanciesList/VacancuItem/VacancyItem';
import { SliderNavBtn } from './SliderButton/SliderNavBtn';
import { StyledSliderNavWrap, StyledSwiper } from './VacanciesSlider.styled';

const VacanciesSlider = () => {
  return (
    <section style={{ maxWidth: '100%' }}>
      <StyledSwiper
        mousewheel
        loop={true}
        centeredSlides
        slidesPerView={'auto'}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[EffectCoverflow, Mousewheel]}
      >
        {vacancies.map(vacancy => (
          <SwiperSlide key={vacancy.vacancieId}>
            <VacancyItem vacancy={vacancy} />
          </SwiperSlide>
        ))}
        <StyledSliderNavWrap>
          <SliderNavBtn navTo={'prev'} />
          <SliderNavBtn navTo={'next'} />
        </StyledSliderNavWrap>
      </StyledSwiper>
    </section>
  );
};

export default VacanciesSlider;

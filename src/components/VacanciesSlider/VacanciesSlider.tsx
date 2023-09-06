import 'swiper/css/effect-coverflow';

import { Navigation, Pagination } from 'swiper/modules';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { vacancies } from '../../common/vacanciesArr';
import VacancyItem from '../VacanciesList/VacancuItem/VacancyItem';
import { StyledSliderSection, StyledSwiper } from './VacanciesSlider.styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import { IVacancieData } from '../../common/vacanciesArr';
import SectionTitle from '../SectionTitle/SectionTitle';

interface VacanciesSliderShortProps {
  title: string;
  vacancies: IVacancieData[];
}

const VacanciesSlider: React.FC<VacanciesSliderShortProps> = ({
  vacancies,
}) => {
  return (
    <StyledSliderSection>
      <SectionContainer>
        <SectionTitle>Vacancies</SectionTitle>
        <StyledSwiper
          pagination={{ clickable: true }}
          navigation
          loop
          slidesPerView={'auto'}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
              slidesPerGroup: 2,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
              slidesPerGroup: 1,
            },
          }}
          modules={[Navigation, Pagination]}
        >
          {vacancies.map(vacancy => (
            <SwiperSlide key={vacancy.id}>
              <VacancyItem vacancy={vacancy} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </SectionContainer>
    </StyledSliderSection>
  );
};

export default VacanciesSlider;

import 'swiper/css/effect-coverflow';

import { Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { vacancies } from '../../common/vacanciesArr';
import VacancyItem from '../VacanciesList/VacancuItem/VacancyItem';

const VacanciesSlider = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Scrollbar]}
        className="mySwiper"
        style={{ paddingBottom: 12, paddingTop: 12 }}
        // spaceBetween={20}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        {vacancies.map(vacancy => (
          <SwiperSlide style={{ width: '50%' }} key={vacancy.vacancieId}>
            <VacancyItem vacancy={vacancy} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VacanciesSlider;

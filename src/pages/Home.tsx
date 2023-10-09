import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs/ContactUs';
import Hero from '../components/Hero/Hero';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';
import WhyAjSerwis from '../components/WhyAjSerwis/WhyAjSerwis';

import { useTranslation } from 'react-i18next';
import {
  ICardFields,
  IVacancieData,
  vacanciesImages,
} from '../common/vacanciesArr';

const Home = () => {
  const { t } = useTranslation();
  const jobListings: IVacancieData[] = t('main.vacancies.job_listing', {
    returnObjects: true,
  });
  const cardFields: ICardFields = t('main.vacancies.card_fields', {
    returnObjects: true,
  });
  return (
    <>
      <Hero />
      <AboutUs />
      <VacanciesSlider
        title={t('main.vacancies.title')}
        vacancies={jobListings}
        cardFields={cardFields}
        vacanciesImages={vacanciesImages}
      />
      <WhyAjSerwis />
      <ContactUs />
    </>
  );
};

export default Home;

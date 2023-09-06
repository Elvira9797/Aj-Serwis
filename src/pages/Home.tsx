import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs/ContactUs';
import Hero from '../components/Hero/Hero';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';
import WhyAjSerwis from '../components/WhyAjSerwis/WhyAjSerwis';

import vacansieList from '../common/card-vacancies.json';
const { job_listing } = vacansieList;

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <VacanciesSlider title="Vacancies" vacancies={job_listing} />
      <WhyAjSerwis />
      <ContactUs />
    </>
  );
};

export default Home;

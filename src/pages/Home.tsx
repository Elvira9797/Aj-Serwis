import AboutUs from '../components/AboutUs/AboutUs';
import ContactUs from '../components/ContactUs/ContactUs';
import Hero from '../components/Hero/Hero';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';
import WhyAjSerwis from '../components/WhyAjSerwis/WhyAjSerwis';

const Home = () => {
  return (
    <>
      <Hero />
      <VacanciesSlider />
      <AboutUs />
      <WhyAjSerwis />
      <ContactUs />
    </>
  );
};

export default Home;

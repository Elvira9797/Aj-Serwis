import { useParams } from 'react-router-dom';
import VacancyInfo from '../components/VacancyInfo/VacancyInfo';

import vacansieList from '../common/full-info-vacancies.json';
import { Element } from 'react-scroll';
import VacancyOffer from '../components/VacancyOffer/VacancyOffer';
import VacancieDetailsFormSection from '../components/VacancieDetailsForm/VacancieDetailsFormSection';

const { job_listing: vacancies } = vacansieList;

const VacanciesDetails = () => {
  const { vacancieId } = useParams();

  const getCurrentVacancy = () => {
    return vacancies.find(vacancy => vacancy.id === vacancieId);
  };

  const getFilteredVacancies = () => {
    return vacancies.filter(vacancy => vacancy.id !== vacancieId);
  };

  const currentVacancy = getCurrentVacancy();

  const filteredVacancies = getFilteredVacancies();
  console.log('filteredVacancies: ', filteredVacancies);

  return (
    <>
      <VacancyInfo vacancy={currentVacancy} />
      <VacancyOffer vacancyOffers={currentVacancy?.what_we_offer} />
      <Element name="form">
        <VacancieDetailsFormSection />
      </Element>
      {/* <VacanciesSlider
        title={'Other vacancies you may be interested in'}
        vacancies={filteredVacancies}
      /> */}
    </>
  );
};

export default VacanciesDetails;

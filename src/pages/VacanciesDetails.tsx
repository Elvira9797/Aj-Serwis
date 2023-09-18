import { useParams } from 'react-router-dom';
import VacancyInfo from '../components/VacancyInfo/VacancyInfo';

import { Element } from 'react-scroll';
import VacancyOffer from '../components/VacancyOffer/VacancyOffer';
import VacancieDetailsFormSection from '../components/VacancieDetailsForm/VacancieDetailsFormSection';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';
import vacansiesFullInfoList from '../common/full-info-vacancies.json';
// import vacacanciesShortList from '../common/card-vacancies.json';

import { useTranslation } from 'react-i18next';
import { IVacancieData } from '../common/vacanciesArr';

const { job_listing: vacanciesFull } = vacansiesFullInfoList;

// const { job_listing: vacaciesShort } = vacacanciesShortList;

const VacanciesDetails = () => {
  const { t } = useTranslation();
  const vacaciesShort: IVacancieData[] = t('main.vacancies.job_listing', {
    returnObjects: true,
  });

  const { id } = useParams();

  const getCurrentVacancy = () => {
    return vacanciesFull.find(vacancy => vacancy.id === id);
  };

  const getFilteredVacancies = () => {
    return vacaciesShort.filter(vacancy => vacancy.id !== id);
  };

  const currentVacancy = getCurrentVacancy();

  const filteredVacancies = getFilteredVacancies();

  return (
    <>
      <VacancyInfo vacancy={currentVacancy} />
      <VacancyOffer vacancyOffers={currentVacancy?.what_we_offer} />
      <Element name="form">
        <VacancieDetailsFormSection />
      </Element>
      <VacanciesSlider
        title={t('vacancies.title')}
        vacancies={filteredVacancies}
      />
    </>
  );
};

export default VacanciesDetails;

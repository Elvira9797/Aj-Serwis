import { useParams } from 'react-router-dom';
import VacancyInfo from '../components/VacancyInfo/VacancyInfo';
import { Element } from 'react-scroll';
import VacancyOffer from '../components/VacancyOffer/VacancyOffer';
import VacancieDetailsFormSection from '../components/VacancieDetailsForm/VacancieDetailsFormSection';
import VacanciesSlider from '../components/VacanciesSlider/VacanciesSlider';
import { useTranslation } from 'react-i18next';
import {
  ICardFields,
  IFullVacancieData,
  IVacancieData,
} from '../common/vacanciesArr';
import NotFound from './NotFound';

const VacanciesDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const vacaciesShort: IVacancieData[] = t('main.vacancies.job_listing', {
    returnObjects: true,
  });

  const cardFields: ICardFields = t('main.vacancies.card_fields', {
    returnObjects: true,
  });

  const vacanciesFullInfo: IFullVacancieData[] = t(
    'vacancyDetails.vacancyInfo.job_listing',
    {
      returnObjects: true,
    }
  );

  const getCurrentVacancy = () => {
    return vacanciesFullInfo.find(vacancy => vacancy.id === id);
  };

  const getFilteredVacancies = () => {
    return vacaciesShort.filter(vacancy => vacancy.id !== id);
  };
  const currentVacancy = getCurrentVacancy();

  const filteredVacancies = getFilteredVacancies();

  return (
    <>
      {currentVacancy ? (
        <>
          <VacancyInfo vacancy={currentVacancy} />
          <VacancyOffer vacancyOffers={currentVacancy?.what_we_offer} />
          <Element name="form">
            <VacancieDetailsFormSection
              vacancyName={currentVacancy?.job_title}
            />
          </Element>
          <VacanciesSlider
            title={t('vacancies.title')}
            vacancies={filteredVacancies}
            cardFields={cardFields}
          />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default VacanciesDetails;

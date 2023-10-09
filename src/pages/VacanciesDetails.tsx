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
  vacanciesImages,
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

  const getCurrentVacancyIdx = () => {
    return vacaciesShort.findIndex(vacancy => vacancy.id === id);
  };

  const getFilteredImages = (idx: number) => {
    const filteredArr = vacanciesImages.filter((_, index) => index !== idx);
    return filteredArr;
  };

  const currentVacancy = getCurrentVacancy();

  const filteredVacancies = getFilteredVacancies();

  const idx = getCurrentVacancyIdx();

  const filteredImages = getFilteredImages(idx);

  return (
    <>
      {currentVacancy ? (
        <>
          <VacancyInfo vacancy={currentVacancy} image={vacanciesImages[idx]} />
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
            vacanciesImages={filteredImages}
          />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default VacanciesDetails;

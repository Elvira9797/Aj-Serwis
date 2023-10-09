import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

import SectionTitle from '../SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';
import {
  ICardFields,
  IVacancieData,
  vacanciesImages,
} from '../../common/vacanciesArr';

function VacanciesList() {
  const { t } = useTranslation();

  const vacaciesShort: IVacancieData[] = t('main.vacancies.job_listing', {
    returnObjects: true,
  });

  const cardFields: ICardFields = t('main.vacancies.card_fields', {
    returnObjects: true,
  });

  return (
    <StyledVacanciesSection style={{ paddingTop: '110px' }}>
      <SectionContainer>
        <SectionTitle style={{ marginBottom: '10px' }}>
          {t('vacancies.title')}
        </SectionTitle>
        <StyledVacancyList>
          {vacaciesShort.length > 0 &&
            vacaciesShort.map((vacancy, index) => (
              <VacancyItem
                key={vacancy.id}
                vacancy={vacancy}
                image={vacanciesImages[index]}
                cardFields={cardFields}
              />
            ))}
        </StyledVacancyList>
      </SectionContainer>
    </StyledVacanciesSection>
  );
}

export default VacanciesList;

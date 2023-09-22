import { useLocation } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

import SectionTitle from '../SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';
import { ICardFields, IVacancieData } from '../../common/vacanciesArr';
import { useRef } from 'react';

function VacanciesList() {
  const location = useLocation();
  const { t } = useTranslation();

  const prevPath = useRef(location.state?.from ?? `/`);

  if (location.state) {
    prevPath.current.search = location.search;
  }

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
        <GoBackBtn prevPath={prevPath.current} style={{ marginBottom: '2rem' }}>
          {t('vacancies.back')}
        </GoBackBtn>
        <StyledVacancyList>
          {vacaciesShort.length > 0 &&
            vacaciesShort.map(vacancy => (
              <VacancyItem
                key={vacancy.id}
                vacancy={vacancy}
                cardFields={cardFields}
              />
            ))}
        </StyledVacancyList>
      </SectionContainer>
    </StyledVacanciesSection>
  );
}

export default VacanciesList;

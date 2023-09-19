import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

import SectionTitle from '../SectionTitle/SectionTitle';
import { useSpring, animated } from 'react-spring';

import { useTranslation } from 'react-i18next';
import { IVacancieData } from '../../common/vacanciesArr';

function VacanciesList() {
  const navigate = useNavigate();

  const { t } = useTranslation();
  const vacaciesShort: IVacancieData[] = t('main.vacancies.job_listing', {
    returnObjects: true,
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });
  return (
    <StyledVacanciesSection style={{ paddingTop: '110px' }}>
      <SectionContainer>
        <animated.div style={titleSpring}>
          <SectionTitle style={{ marginBottom: '10px' }}>
            {t('vacancies.title')}
          </SectionTitle>
        </animated.div>
        <GoBackBtn
          onClick={() => navigate(-1)}
          style={{ marginBottom: '2rem' }}
        >
          {t('vacancies.back')}
        </GoBackBtn>
        <StyledVacancyList>
          {vacaciesShort.length > 0 &&
            vacaciesShort.map(vacancy => (
              <VacancyItem key={vacancy.id} vacancy={vacancy} />
            ))}
        </StyledVacancyList>
      </SectionContainer>
    </StyledVacanciesSection>
  );
}

export default VacanciesList;

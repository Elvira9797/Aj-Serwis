import { useNavigate } from 'react-router-dom';
import { theme } from '../../common/theme';
import { Title } from '../ContactUs/ContactUs.styled';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

import vacansieList from '../../common/card-vacancies.json';
const { job_listing } = vacansieList;

function VacanciesList() {
  const navigate = useNavigate();
  return (
    <StyledVacanciesSection>
      <SectionContainer>
        <Title style={{ color: `${theme.colors.primaryColor}` }}>
          Vacancies
        </Title>
        <GoBackBtn
          onClick={() => navigate(-1)}
          style={{ marginBottom: '2rem' }}
        >
          Go back
        </GoBackBtn>
        <StyledVacancyList>
          {job_listing.length > 0 &&
            job_listing.map(vacancy => (
              <VacancyItem key={vacancy.id} vacancy={vacancy} />
            ))}
        </StyledVacancyList>
      </SectionContainer>
    </StyledVacanciesSection>
  );
}

export default VacanciesList;

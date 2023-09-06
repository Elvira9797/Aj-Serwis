import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

import vacansieList from '../../common/card-vacancies.json';
import SectionTitle from '../SectionTitle/SectionTitle';
const { job_listing } = vacansieList;

function VacanciesList() {
  const navigate = useNavigate();
  return (
    <StyledVacanciesSection style={{ paddingTop: '110px' }}>
      <SectionContainer>
        <SectionTitle style={{ marginBottom: '10px' }}>
          Current Job Offers
        </SectionTitle>
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

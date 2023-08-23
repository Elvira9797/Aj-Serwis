import { useNavigate } from 'react-router-dom';
import { theme } from '../../common/theme';
import { vacancies } from '../../common/vacanciesArr';
import { Title } from '../ContactUs/ContactUs.styled';
import GoBackBtn from '../GoBackBtn/GoBackBtn';
import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

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
          {vacancies.length > 0 &&
            vacancies.map(vacancy => (
              <VacancyItem key={vacancy.vacancieId} vacancy={vacancy} />
            ))}
        </StyledVacancyList>
      </SectionContainer>
    </StyledVacanciesSection>
  );
}

export default VacanciesList;

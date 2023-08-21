import { theme } from '../../common/theme';
import { vacancies } from '../../common/vacanciesArr';
import { Title } from '../ContactUs/ContactUs.styled';
import SectionContainer from '../SectionContainer/SectionContainer';
import VacancyItem from './VacancuItem/VacancyItem';
import {
  StyledVacanciesSection,
  StyledVacancyList,
} from './VacancyList.styled';

function VacanciesList() {
  return (
    <StyledVacanciesSection>
      <SectionContainer>
        <Title style={{ color: `${theme.colors.primaryColor}` }}>
          Vacancies
        </Title>
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

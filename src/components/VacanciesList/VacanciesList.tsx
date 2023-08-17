import { vacancies } from '../../common/vacanciesArr';
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

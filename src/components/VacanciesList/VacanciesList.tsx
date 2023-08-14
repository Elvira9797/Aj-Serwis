import { vacancies } from '../../common/vacanciesArr';
import VacancyItem from './VacancuItem/VacancyItem';
import { StyledVacancyList } from './VacancyList.styled';

function VacanciesList() {
  return (
    <StyledVacancyList>
      {vacancies.map(vacancy => (
        <VacancyItem vacancy={vacancy} />
      ))}
    </StyledVacancyList>
  );
}

export default VacanciesList;

import { vacancies } from '../../common/vacanciesArr';
import VacancyItem from './VacancuItem/VacancyItem';
import { StyledVacancyList } from './VacancyList.styled';

function VacanciesList() {
  return (
    <StyledVacancyList>
      {vacancies.length > 0 &&
        vacancies.map(vacancy => (
          <VacancyItem key={vacancy.vacancieId} vacancy={vacancy} />
        ))}
    </StyledVacancyList>
  );
}

export default VacanciesList;

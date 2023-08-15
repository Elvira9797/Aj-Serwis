import { Link, useLocation } from 'react-router-dom';
import { IVacancieData } from '../../../common/models';
import {
  StyledVacancyItem,
  StyledVacancyItemImg,
  StyledVacancyLink,
  StyledVacancyShortInfo,
  StyledVacancyText,
  StyledVacancyTitle,
} from './VacancyItem.styled';

interface IVacancyItem {
  vacancy: IVacancieData;
}

const VacancyItem: React.FC<IVacancyItem> = ({
  vacancy: { vacancieId, image, shortInfo, city, position, salary },
}) => {
  const location = useLocation();

  return (
    <StyledVacancyItem key={vacancieId}>
      <StyledVacancyLink
        to={`/vacancies/${vacancieId}`}
        state={{ from: location }}
      >
        <StyledVacancyItemImg src={image} alt={shortInfo} />
        <StyledVacancyShortInfo>{shortInfo}</StyledVacancyShortInfo>
        <StyledVacancyText>
          <StyledVacancyTitle>City:</StyledVacancyTitle> {city}
        </StyledVacancyText>
        <StyledVacancyText>
          <StyledVacancyTitle>Position:</StyledVacancyTitle> {position}
        </StyledVacancyText>
        <StyledVacancyText>
          <StyledVacancyTitle>Salary:</StyledVacancyTitle> {salary}
        </StyledVacancyText>
      </StyledVacancyLink>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to={`/vacancies/${vacancieId}`} state={{ from: location }}>
          <button
            onClick={() => {
              console.log('Navigate to Form');
            }}
          >
            Send resume
          </button>
        </Link>
        <Link to={`/vacancies/${vacancieId}`} state={{ from: location }}>
          <button
            onClick={() => {
              console.log('Navigate Vacancy Details');
            }}
          >
            More Info
          </button>
        </Link>
      </div>
    </StyledVacancyItem>
  );
};

export default VacancyItem;

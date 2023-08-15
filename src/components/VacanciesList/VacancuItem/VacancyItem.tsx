import { useLocation } from 'react-router-dom';
import { IVacancieData } from '../../../common/vacanciesArr';
import {
  StyledVacancyItem,
  StyledVacancyItemImg,
  StyledVacancyLink,
  StyledVacancyShortInfo,
  StyledVacancyText,
  StyledVacancyTitle,
} from './VacancyItem.styled';
import Button from '../../Button/Button';

interface IVacancyItem {
  vacancy: IVacancieData;
}

const VacancyItem: React.FC<IVacancyItem> = ({
  vacancy: { vacancieId, image, shortInfo, city, position, salary },
}) => {
  const location = useLocation();

  return (
    <StyledVacancyItem>
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
        <StyledVacancyLink
          to={`/vacancies/${vacancieId}`}
          state={{ from: location }}
        >
          <Button
            variant={'primary'}
            size={'sm'}
            type={'button'}
            style={{
              textDecoration: 'none',
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 12,
              paddingRight: 12,
            }}
            onClick={() => {
              console.log('Navigate to Form');
            }}
          >
            Send resume
          </Button>
        </StyledVacancyLink>
        <StyledVacancyLink
          to={`/vacancies/${vacancieId}`}
          state={{ from: location }}
        >
          <Button
            variant={'primary'}
            size={'sm'}
            type={'button'}
            style={{
              textDecoration: 'none',
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 12,
              paddingRight: 12,
            }}
            onClick={() => {
              console.log('Navigate Vacancy Details');
            }}
          >
            More Info
          </Button>
        </StyledVacancyLink>
      </div>
    </StyledVacancyItem>
  );
};

export default VacancyItem;

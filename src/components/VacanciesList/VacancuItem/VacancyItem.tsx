import { useLocation } from 'react-router-dom';
import { IVacancieData } from '../../../common/vacanciesArr';
import {
  StyledGradientWrap,
  StyledImgGradient,
  StyledTextContainer,
  StyledVacancyItem,
  StyledVacancyItemImg,
  StyledVacancyLink,
  StyledVacancyShortInfo,
  StyledVacancyText,
  StyledVacancyTitle,
} from './VacancyItem.styled';
import Button from '../../Button/Button';
import { theme } from '../../../common/theme';

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
        <StyledGradientWrap>
          <StyledVacancyItemImg src={image} alt={shortInfo} />
          <StyledImgGradient>
            <StyledVacancyShortInfo>{shortInfo}</StyledVacancyShortInfo>
          </StyledImgGradient>
        </StyledGradientWrap>

        <StyledTextContainer>
          <StyledVacancyText>
            <StyledVacancyTitle>City:</StyledVacancyTitle> {city}
          </StyledVacancyText>
          <StyledVacancyText>
            <StyledVacancyTitle>Position:</StyledVacancyTitle> {position}
          </StyledVacancyText>
          <StyledVacancyText>
            <StyledVacancyTitle>Salary:</StyledVacancyTitle> {salary}
          </StyledVacancyText>
        </StyledTextContainer>
      </StyledVacancyLink>

      <StyledVacancyLink
        to={`/vacancies/${vacancieId}`}
        state={{ from: location }}
      >
        <Button
          variant={'secondary'}
          size={'md'}
          type={'button'}
          style={{
            textDecoration: 'none',
            width: '100%',
            backgroundColor: `${theme.colors.primaryColor}`,
            borderColor: `${theme.colors.primaryColor}`,
            borderRadius: 4,
          }}
          onClick={() => {
            console.log('Navigate Vacancy Details');
          }}
        >
          More Info
        </Button>
      </StyledVacancyLink>
    </StyledVacancyItem>
  );
};

export default VacancyItem;

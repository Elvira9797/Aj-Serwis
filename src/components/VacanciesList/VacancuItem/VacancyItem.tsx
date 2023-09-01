import { useLocation } from 'react-router-dom';
import { IFullVacancieData, IVacancieData } from '../../../common/vacanciesArr';
import {
  StyledGradientWrap,
  StyledImgGradient,
  StyledTextContainer,
  StyledVacancyItem,
  StyledVacancyItemImg,
  StyledVacancyLink,
  StyledVacancyJobTitle,
  StyledVacancyText,
  StyledVacancyTitle,
} from './VacancyItem.styled';
import Button from '../../Button/Button';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiCash } from 'react-icons/gi';

interface IVacancyItem {
  vacancy: IVacancieData;
}

interface IVacancyFullItem {
  vacancy: IFullVacancieData | any;
}

const VacancyItem: React.FC<IVacancyItem | IVacancyFullItem> = ({
  vacancy: { id, image, job_title, city, position, salary },
}) => {
  const location = useLocation();

  return (
    <StyledVacancyItem>
      <StyledVacancyLink to={`/vacancies/${id}`} state={{ from: location }}>
        <StyledGradientWrap>
          <StyledVacancyItemImg src={image} alt={job_title} />
          <StyledImgGradient>
            <StyledVacancyJobTitle>{job_title}</StyledVacancyJobTitle>
          </StyledImgGradient>
        </StyledGradientWrap>

        <StyledTextContainer>
          <StyledVacancyText>
            <FaLocationDot size={24} color="#c3a069" />
            <StyledVacancyTitle>City:</StyledVacancyTitle> {city}
          </StyledVacancyText>
          <StyledVacancyText>
            <BsFillPersonFill size={24} color="#c3a069" />
            <StyledVacancyTitle>Position:</StyledVacancyTitle> {position}
          </StyledVacancyText>
          <StyledVacancyText>
            <GiCash size={24} color="#c3a069" />
            <StyledVacancyTitle>Salary:</StyledVacancyTitle> {salary}
          </StyledVacancyText>
        </StyledTextContainer>
      </StyledVacancyLink>

      <StyledVacancyLink to={`/vacancies/${id}`} state={{ from: location }}>
        <Button
          variant={'card'}
          type={'button'}
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

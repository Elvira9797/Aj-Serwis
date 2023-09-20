import { useLocation } from 'react-router-dom';
import { IVacancieData } from '../../../common/vacanciesArr';
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
import AnimateOpacity from '../../AnimateOnView/AnimateOpacity';
import i18n from '../../../i18n';

interface IVacancyItem {
  vacancy: IVacancieData;
}

const VacancyItem: React.FC<IVacancyItem> = ({
  vacancy: { id, image, job_title, city, position, salary },
}) => {
  const location = useLocation();
  const res = i18n.resolvedLanguage;
  console.log('res: ', res);

  return (
    <StyledVacancyItem>
      <StyledVacancyLink
        to={`/vacancies/${id}?lang=${res}`}
        state={{ from: location }}
      >
        <StyledGradientWrap>
          <StyledVacancyItemImg src={image} alt={job_title} />
          <StyledImgGradient>
            <AnimateOpacity>
              <StyledVacancyJobTitle>{job_title}</StyledVacancyJobTitle>
            </AnimateOpacity>
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

      <StyledVacancyLink
        to={`/vacancies/${id}?lang=${res}`}
        state={{ from: location }}
      >
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

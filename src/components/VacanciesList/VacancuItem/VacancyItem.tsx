import { useLocation } from 'react-router-dom';
import { ICardFields, IVacancieData } from '../../../common/vacanciesArr';
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
import AnimateOnView from '../../AnimateOnView/AnimateOnView';
import i18n from '../../../i18n';

interface IVacancyItem {
  vacancy: IVacancieData;
  cardFields: ICardFields;
  image: string;
}

const VacancyItem: React.FC<IVacancyItem> = ({
  vacancy: { id, job_title, city, position, salary },
  cardFields,
  image,
}) => {
  const location = useLocation();
  const res = i18n.resolvedLanguage;

  return (
    <StyledVacancyItem>
      <StyledVacancyLink
        to={`/vacancies/${id}?lang=${res}`}
        state={{ from: location }}
      >
        <StyledGradientWrap>
          <StyledVacancyItemImg src={image} alt={job_title} />
          <StyledImgGradient>
            <AnimateOnView>
              <StyledVacancyJobTitle>{job_title}</StyledVacancyJobTitle>
            </AnimateOnView>
          </StyledImgGradient>
        </StyledGradientWrap>

        <StyledTextContainer>
          <StyledVacancyText>
            <FaLocationDot size={24} color="#c3a069" />
            <StyledVacancyTitle>{cardFields.city}:</StyledVacancyTitle> {city}
          </StyledVacancyText>
          <StyledVacancyText>
            <BsFillPersonFill size={24} color="#c3a069" />
            <StyledVacancyTitle>{cardFields.position}:</StyledVacancyTitle>
            {position}
          </StyledVacancyText>
          <StyledVacancyText>
            <GiCash size={24} color="#c3a069" />
            <StyledVacancyTitle>{cardFields.salary}:</StyledVacancyTitle>
            {salary}
          </StyledVacancyText>
        </StyledTextContainer>
      </StyledVacancyLink>

      <StyledVacancyLink
        to={`/vacancies/${id}?lang=${res}`}
        state={{ from: location }}
      >
        <Button variant={'card'} type={'button'} onClick={() => {}}>
          {cardFields.more_info}
        </Button>
      </StyledVacancyLink>
    </StyledVacancyItem>
  );
};

export default VacancyItem;

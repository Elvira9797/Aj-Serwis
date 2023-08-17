import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../../common/theme';

export const StyledVacancyLink = styled(Link)`
  text-decoration: none;
`;

export const StyledVacancyItem = styled.li`
  transition: ${theme.transition.basic};
  border-radius: 4px;
  background: ${theme.colors.secondaryColor};

  &:hover,
  :focus {
    transform: scale(1.03);
    cursor: pointer;
    box-shadow: 3px 6px 4px 1px rgba(0, 0, 0, 0.2),
      1px 2px 4px 4px rgba(0, 0, 0, 0.12);
  }
`;

export const StyledVacancyItemImg = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(
    180deg,
    rgba(29, 22, 0, 1) 8%,
    rgba(255, 255, 255, 0) 40%
  );
`;
export const StyledImgGradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 15%,
    rgba(252, 176, 69, 0) 50%
  );
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 6px;
`;

export const StyledGradientWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StyledVacancyText = styled.p`
  text-align: start;
  color: black;
`;
export const StyledVacancyShortInfo = styled.p`
  text-align: start;

  color: ${theme.colors.secondaryColor};
  font-size: 20px;
`;

export const StyledVacancyTitle = styled.span`
  text-align: start;

  font-size: 18px;
  font-weight: 600;
`;

export const StyledTextContainer = styled.div`
  padding: 6px;
`;

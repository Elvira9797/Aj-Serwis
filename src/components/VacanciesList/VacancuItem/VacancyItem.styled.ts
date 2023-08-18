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

  &:hover img {
    transform: scale(1.03);
    transition: transform 0.5s, filter 1.5s ease-in-out;
    filter: brightness(100%);
  }
`;

export const StyledVacancyItemImg = styled.img`
  filter: brightness(70%);

  position: relative;
  z-index: 2;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transition: transform 0.5s, filter 1.5s ease-in-out;
    filter: grayscale(100%);
  }
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

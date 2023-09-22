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
  overflow: hidden;

  &:hover img {
    transform: scale(1.03);
    transition: all 500ms, filter 500ms ease-in-out;
    filter: brightness(100%);
  }
`;

export const StyledVacancyItemImg = styled.img`
  filter: brightness(80%);

  position: relative;
  z-index: 2;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    transition: all 500ms ease-in-out;
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
  padding: 10px 16px;
`;

export const StyledGradientWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

export const StyledVacancyText = styled.p`
  display: flex;
  align-items: center;
  text-align: start;
  color: black;
  gap: 12px;
  font-size: 14px;
`;
export const StyledVacancyJobTitle = styled.p`
  text-align: start;

  color: ${theme.colors.secondaryColor};
  font-size: 20px;
`;

export const StyledVacancyTitle = styled.span`
  text-align: start;

  font-size: 14px;
  font-weight: 600;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  padding: 16px 8px;
`;

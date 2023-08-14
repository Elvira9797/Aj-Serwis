import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledVacancyLink = styled(Link)`
  text-decoration: none;
`;

export const StyledVacancyItem = styled.li`
  padding-bottom: 12px;
  transition: all 0.2s ease-in;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const StyledVacancyItemImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledVacancyText = styled.p`
  color: black;
`;
export const StyledVacancyShortInfo = styled.p`
  color: black;
  font-size: 18;
`;

export const StyledVacancyTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

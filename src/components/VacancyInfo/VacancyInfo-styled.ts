import styled from '@emotion/styled';

export const VacancyContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 90px;
`;

export const VacancyTitle = styled.h2`
  text-align: start;
  text-transform: uppercase;
  font-weight: 400;
`;

export const VacancyList = styled.ul`
  max-width: 100%;
  padding-left: 90px;
  p {
    text-align: start;
    text-transform: uppercase;
    :last-child {
      text-transform: none;
    }
  }
`;
export const VacancyItem = styled.li`
  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

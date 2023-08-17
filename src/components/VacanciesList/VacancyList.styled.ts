import styled from '@emotion/styled';
import { theme } from '../../common/theme';

export const StyledVacancyList = styled.ul`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledVacanciesSection = styled.section`
  padding-top: ${theme.section.padding.medium.paddingTop};
  padding-bottom: ${theme.section.padding.medium.paddingBottom};
`;

import styled from '@emotion/styled';
import { theme } from '../../common/theme';

export const StyledWhyAjSection = styled.section`
  padding-top: ${theme.section.padding.small.paddingTop};
  padding-bottom: ${theme.section.padding.small.paddingBottom};

  @media (min-width: 768px) {
    padding-top: ${theme.section.padding.medium.paddingTop};
    padding-bottom: ${theme.section.padding.medium.paddingBottom};
  }
`;

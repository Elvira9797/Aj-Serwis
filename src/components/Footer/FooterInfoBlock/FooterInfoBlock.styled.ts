import styled from '@emotion/styled';

export const StyledFooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 0.8rem;

  padding: 0.5rem;

  font-weight: ${props => props.theme.typography.fontWeight.regular};

  a {
    transition: ${props => props.theme.transition.basic};
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;

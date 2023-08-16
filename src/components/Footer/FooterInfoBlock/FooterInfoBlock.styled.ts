import styled from '@emotion/styled';

export const StyledFooterInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 0.8rem;

  padding: 0.5rem;

  color: ${props => props.theme.colors.lightGrey};
  font-weight: ${props => props.theme.typography.fontWeight.regular};
`;

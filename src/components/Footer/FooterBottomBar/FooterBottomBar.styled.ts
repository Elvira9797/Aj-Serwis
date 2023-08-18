import styled from '@emotion/styled';

export const StyledFooterBottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.7rem;
  color: ${props => props.theme.colors.lightGrey};

  border-top: 1px solid ${props => props.theme.colors.lightGrey};

  a {
    color: ${props => props.theme.colors.lightGrey};

    margin-left: 4px;
  }
`;

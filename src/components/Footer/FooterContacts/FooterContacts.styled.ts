import styled from '@emotion/styled';

export const ContactsContainer = styled.div`
  max-width: 32rem;
  min-width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  font-size: 0.8rem;
`;

export const ContactWraper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  a {
    transition: ${props => props.theme.transition.basic};
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;

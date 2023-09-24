import styled from '@emotion/styled';

interface ContactsDisplayProps {
  displayName: 'visible' | 'none';
}

export const ContactsContainer = styled.div`
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  font-size: 0.7rem;
`;

export const ContactWraper = styled.li<ContactsDisplayProps>`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    display: ${({ displayName }) => displayName || 'none'};
    color: ${props => props.theme.colors.lightGrey};
  }

  a {
    color: ${props => props.theme.colors.lightGrey};
    transition: ${props => props.theme.transition.basic};
    margin-bottom: 6px;
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;

export const ContactBox = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ContactPhone = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
`;

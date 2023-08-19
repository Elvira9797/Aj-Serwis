import styled from '@emotion/styled';

interface StyledTopBarProps {
  isVisible: boolean;
}

export const StyledTopBar = styled.div<StyledTopBarProps>`
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.lightGrey};
  font-size: 0.9rem;

  justify-content: space-between;
  align-items: center;
  max-width: 1232px;
  margin: 0 auto;
  padding: 0.1rem 2rem;
  transition: height 0.3s, opacity 0.3s;
  height: ${props => (props.isVisible ? 'auto' : '0')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavWrader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.lightGrey};
    transition: ${props => props.theme.transition.basic};
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;

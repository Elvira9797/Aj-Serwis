import styled from '@emotion/styled';

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  .active {
    color: ${props => props.theme.colors.accentColor};
  }

  a {
    font-weight: ${props => props.theme.typography.fontWeight.semiBold};
    font-size: 1rem;
    text-decoration: none;
    color: ${props => props.theme.colors.secondaryColor};
    transition: ${props => props.theme.transition.basic};
    position: relative;
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.theme.colors.accentColor};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }

  a:hover::before {
    transform: scaleX(1);
  }
`;

import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalMobileMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  width: 70vw;
  height: 90vh;

  background: linear-gradient(
    to left,
    rgba(17, 17, 17, 1),
    rgba(17, 17, 17, 0.9)
  );

  border-radius: 6px;

  padding: 1.1rem 4px 5rem 4px;
`;

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

export const StyledNavWrader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: ${props => props.theme.colors.lightGrey};
    transition: ${props => props.theme.transition.basic};
    margin-bottom: 5px;
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;

export const ContactWraper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  span {
    font-size: 0.7rem;

    color: ${props => props.theme.colors.lightGrey};
  }

  a {
    font-size: 0.7rem;

    color: ${props => props.theme.colors.lightGrey};
    transition: ${props => props.theme.transition.basic};
  }

  a:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;

export const CloseButton = styled.button`
  margin-left: auto;
  margin-right: 12px;
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

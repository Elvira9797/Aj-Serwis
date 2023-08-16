import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

const slideAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOutAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 68px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  z-index: 9999;
  transition: ${props => props.theme.transition.basic};
`;

export const ModalMobileMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  width: 100vw;
  height: 70vh;

  background-color: ${props => props.theme.colors.bgColor};
  padding: 3rem;

  animation: ${props =>
    props.isOpen
      ? css`
          ${slideAnimation} 0.5s ease-in-out
        `
      : css`
          ${slideOutAnimation} 0.5s ease-in-out
        `};
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
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
    color: ${props => props.theme.colors.primaryColor};
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

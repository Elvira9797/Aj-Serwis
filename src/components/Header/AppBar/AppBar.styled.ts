import styled from '@emotion/styled';

export const StyledAppBar = styled.div`
  max-width: 1232px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 1rem 0.2rem 1rem;
  margin: 0 auto;
`;

export const StyledNavWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    display: none;
  }
`;

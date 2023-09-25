import styled from '@emotion/styled';

export const StyledAppBar = styled.div`
  max-width: 1232px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
  margin: 0 auto;
`;

export const StyledNavWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: 1rem;
  }
`;

export const BurgerButton = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderNav = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

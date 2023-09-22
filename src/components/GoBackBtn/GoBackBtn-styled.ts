import styled from '@emotion/styled';

export const StyledGoBackBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border-bottom: 1px #000 solid;
  font-size: 0.8rem;
  color: #000;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  transition: ${({ theme }) => theme.transition.basic};

  span {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10px;
    transition: ${({ theme }) => theme.transition.basic};
    color: ${({ theme }) => theme.colors.accentColor};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accentColor};
    padding-left: 1rem;
    border-bottom: 1px ${({ theme }) => theme.colors.accentColor} solid;
  }
  &:hover span {
    opacity: 1;
    left: 0;
  }
`;

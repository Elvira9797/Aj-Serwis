import styled from '@emotion/styled';

export const BtnToTop = styled.button`
  position: fixed;
  z-index: 3;
  right: 20px;
  bottom: 25px;
  width: 45px;
  height: 45px;
  background-image: linear-gradient(#c3a069, #9a7a47);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  border: none;
  transition-duration: 0.3s;
  &.visible {
    opacity: 1;
  }
`;

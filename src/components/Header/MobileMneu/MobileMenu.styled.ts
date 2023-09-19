import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 120vh;
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

export const CloseButton = styled.button`
  margin-left: auto;
  margin-right: 12px;
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

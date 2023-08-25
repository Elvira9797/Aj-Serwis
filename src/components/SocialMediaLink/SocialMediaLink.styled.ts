import styled from '@emotion/styled';

export const SocialList = styled.ul`
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 4px;
  right: 0;
  @media (max-width: 1236px) {
    flex-direction: row;
    left: 0;
    bottom: 0;
    position: absolute;
  }
`;

export const SocialListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 4px 0 0 4px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1236px) {
    border-radius: 4px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  @media (max-width: 1236px) {
    padding: 6px;
  }
`;

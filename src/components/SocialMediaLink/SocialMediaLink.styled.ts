import styled from '@emotion/styled';

export const SocialList = styled.ul`
  position: fixed;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 4px;
  right: 0;
  @media (max-width: 450px) {
    flex-direction: row;
    left: 0;
    bottom: 0;
    position: absolute;
  }
`;

export const SocialListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.accentColor};
  padding: 8px;
  border-radius: 4px 0 0 4px;
  @media (max-width: 450px) {
    padding: 6px;
    border-radius: 4px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

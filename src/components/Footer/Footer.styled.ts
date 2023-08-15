import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: rgb(17, 17, 17);
  color: ${props => props.theme.colors.secondaryColor};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 0 1rem 0;
`;

import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: rgb(17, 17, 17);
`;

export const Container = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 2rem 1rem;

  @media (max-width: 910px) {
    justify-content: center;
    flex-direction: column;
  }
`;

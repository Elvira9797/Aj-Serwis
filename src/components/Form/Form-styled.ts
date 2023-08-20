import styled from '@emotion/styled';

export const StyledForm = styled.form`
  /* background-image: linear-gradient(
    to righ
    rgba(6, 7, 7, 0.6),
    rgba(34, 32, 32, 0.4)
  ); */
  max-width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  row-gap: 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

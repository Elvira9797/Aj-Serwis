import styled from '@emotion/styled';

export const StyledFormSection = styled.div`
  padding: 90px 0;
  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const StyledFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledFormInfo = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h2 {
    text-align: start;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  p {
    text-align: start;
    font-size: 1.2rem;
  }
`;

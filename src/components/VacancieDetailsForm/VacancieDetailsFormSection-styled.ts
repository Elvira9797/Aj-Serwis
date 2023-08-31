import styled from '@emotion/styled';

export const VacancyFormContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const VacancyFormInfo = styled.div`
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

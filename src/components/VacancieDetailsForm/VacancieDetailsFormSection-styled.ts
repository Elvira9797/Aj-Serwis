import styled from '@emotion/styled';

export const StyledFormSection = styled.div`
  padding-top: ${({ theme }) => theme.section.padding.small.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.small.paddingBottom};
  @media (min-width: 1236px) {
    padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
    padding-bottom: ${({ theme }) =>
      theme.section.padding.medium.paddingBottom};
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

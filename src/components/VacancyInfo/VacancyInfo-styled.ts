import styled from '@emotion/styled';

export const VacancyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 1200px) {
    gap: 2rem;
  }
`;

export const VacancyTitle = styled.h2`
  text-align: start;
  text-transform: uppercase;
  font-weight: 400;
`;

export const VacancyImg = styled.img`
  max-width: 50%;
  max-height: 400px;
  object-fit: cover;
  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const VacancyList = styled.ul`
  flex-basis: 100%;
  p {
    text-align: start;
    text-transform: uppercase;
    :last-child {
      text-transform: none;
    }
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;
export const VacancyItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const VacancySpan = styled.span`
  font-weight: 700;
  margin-right: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;





export const VacancySection = styled.section`
  :first-of-type {
    padding-top: 8rem;
  }
  padding: 90px 0;
  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const VacancyText = styled.p`
  /* text-transform: uppercase; */
  text-transform: capitalize;
`;

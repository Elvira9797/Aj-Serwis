import styled from '@emotion/styled';

export const VacancyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 3rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 1200px) {
    gap: 2rem;
  }
`;

export const VacancyTitle = styled.h2`
  text-align: start;
  text-transform: uppercase;
  font-weight: 600;
`;

export const VacancyImg = styled.img`
  object-fit: cover;
  height: 390px;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const VacancyList = styled.ul`
  flex-basis: 100%;
  p {
    text-align: start;
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;
export const VacancyItem = styled.li`
  margin-bottom: 1rem;
`;

export const VacancySpan = styled.span`
  font-weight: 700;
  margin-right: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const VacancyLink = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const VacancySection = styled.section`
  padding: 90px 0;
  padding-top: 8rem;
  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

export const VacancyTextLocation = styled.p`
  display: flex;
  text-transform: lowercase;
  :first-of-type {
    text-transform: none;
  }

  > a {
    color: inherit;
  }
`;

export const VacancyText = styled.p`
  text-transform: lowercase;
  :first-of-type {
    text-transform: none;
  }

  > a {
    color: inherit;
  }
`;

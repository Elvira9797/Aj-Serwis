import styled from '@emotion/styled';

export const ContactFormSection = styled.section`
  padding-top: ${({ theme }) => theme.section.padding.small.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.small.paddingBottom};
  @media (min-width: 1236px) {
    padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
    padding-bottom: ${({ theme }) =>
      theme.section.padding.medium.paddingBottom};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

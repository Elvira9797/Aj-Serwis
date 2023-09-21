import styled from '@emotion/styled';

export const Container = styled.div`
  gap: 15px;
  height: 100%;
  align-items: center;
  padding-top: ${({ theme }) => theme.section.padding.small.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.small.paddingBottom};
  @media (min-width: 1236px) {
    padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
    padding-bottom: ${({ theme }) =>
      theme.section.padding.medium.paddingBottom};
  }
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: left;

  margin-top: 2.5rem;
  justify-content: center;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    font-size: 16px;
    text-align: center;
  }
`;
export const RightBox = styled.div`
  height: 80%;
`;
export const Title = styled.h2`
  width: 100%;
  margin-bottom: 0.5rem;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const Text = styled.p`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const ImageEl = styled.img`
  max-width: 100%;
  @media (max-width: 440яpx) {
    display: none;
  }
`;

import styled from '@emotion/styled';

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 26px;
  margin-bottom: 30px;
  &::after {
    content: '';
    width: 240px;
    height: 2px;
    background-color: #ffffff;
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #c3a069;
  }
  @media (max-width: 1160px) {
    align-items: flex-start !important;
  }
  @media (min-width: 1236px) {
    font-size: 32px;
    align-items: flex-start;
    &::after {
      width: 300px;
    }
  }
`;

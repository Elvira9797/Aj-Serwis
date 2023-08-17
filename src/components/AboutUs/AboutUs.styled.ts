import styled from '@emotion/styled';
import { theme } from '../../common/theme';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: ${theme.section.padding.medium.paddingTop};
  padding-bottom: ${theme.section.padding.medium.paddingBottom};
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  @media (min-width: 1200px) {
    flex: 1;
  }
`;
export const RightBox = styled.div`
  @media (min-width: 1200px) {
    width: 60%;
  }
`;
export const Title = styled.h2`
  width: 100%;
  text-align: left;
  &::after {
    content: '';
    width: 70%;
    height: 2px;
    background-color: #ffffff;
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: ${theme.colors.accentColor};
  }
`;
export const Text = styled.p`
  text-align: left;
`;
export const ImageEl = styled.img``;

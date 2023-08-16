import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { theme } from '../../common/theme';

interface TitleProps {
  children: ReactNode;
}

export const Container = styled.div`
  display: flex;
  padding-top: ${theme.section.padding.medium.paddingTop};
  padding-bottom: ${theme.section.padding.medium.paddingBottom};
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
export const RightBox = styled.div`
  width: 60%;
`;
export const Title = styled.h2<TitleProps>`
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

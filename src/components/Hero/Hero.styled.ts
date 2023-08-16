import styled from '@emotion/styled';
import desktopBgImage from '../../img/desktopBgImage.jpg';

export const Overlay = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-top: 112px;
  padding-bottom: 112px;
  background-image: linear-gradient(
      to right,
      rgba(6, 7, 7, 0.8),
      rgba(34, 32, 32, 0.2)
    ),
    url(${desktopBgImage});
  background-size: cover;

  background-position: center;

  @media (min-width: 768px) {
    padding-top: 180px;
    padding-bottom: 180px;
    padding-left: 60px;
  }

  @media (min-width: 1200px) {
    padding-top: 238px;
    padding-bottom: 238px;
    padding-left: 100px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-weight: 700;
  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.02em;
  &::before {
    content: '';
    width: 80px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    display: block;
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    font-size: 46px;
    &::before {
      width: 100px;
    }
  }
  @media (min-width: 1200px) {
    margin-bottom: 20px;
    font-size: 68px;
  }
`;

export const HeroUnderTitle = styled.p`
  font-size: 15px;
  max-width: 375px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-align: start;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 600px;
  }
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

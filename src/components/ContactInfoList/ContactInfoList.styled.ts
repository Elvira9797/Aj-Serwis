import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SectionStyled = styled.section`
  padding-top: ${({ theme }) => theme.section.padding.small.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.small.paddingBottom};
  @media (min-width: 1236px) {
    padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
    padding-bottom: ${({ theme }) =>
      theme.section.padding.medium.paddingBottom};
  }
`;

export const BackgroundStyled = styled(motion.div)`
  display: none;
  @media (min-width: 1160px) {
    height: 374px;
    display: block;
    margin-bottom: 0;
    background-color: #e0e5eb;
    margin-top: 190px;
  }
`;

export const ContactInfoListStyled = styled(motion.ul)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (min-width: 1160px) {
    width: 1000px;
    position: relative;
    top: -75px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
  }
`;

export const ContactInfoItem = styled(motion.li)`
  text-align: center;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: none;
  border-radius: 0;
  @media (min-width: 420px) and (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }
  @media (min-width: 768px) {
    width: calc((100% - 60px) / 4);
  }
`;

export const ContactLink = styled.a`
    text-decoration: none;
    color: currentColor;
}
`;

export const ImgContainer = styled.div`
  @media (min-width: 1160px) {
    position: relative;
    display: inline-block;
    overflow: hidden;
    object-position: 23.33% 41.98%;
    background-position: 100% 41.98%;
    margin: -258px calc(((100% - 1140px) / 2)) 0 auto;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
      z-index: 1;
    }
  }
`;

export const Img = styled.img`
  @media (min-width: 1160px) {
    display: block;
    width: 820px;
    height: 580px;
  }
`;

export const ForTablet = styled.div`
  @media (min-width: 1160px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  padding: 30px;
  width: 120px;
  height: 120px;
  border: 2px solid rgb(195, 160, 105);
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

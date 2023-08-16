import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.medium.paddingBottom};
`;

export const TitleContactInfoList = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

export const ContactInfoListStyled = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const ContactInfoItem = styled.li`
  text-align: center;
`;

import styled from '@emotion/styled';
import { theme } from '../../../common/theme';

export const StyledBenefitsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
`;

export const StyledBenefitItem = styled.li`
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBenefitIcoContainer = styled.div`
  padding: 30px;
  width: 150px;
  height: 150px;
  border: 2px solid ${theme.colors.accentColor};
  border-radius: 50%;
`;

export const StyledBenefitText = styled.p`
  color: rgb(130, 130, 130);
  font-size: 15px;
`;

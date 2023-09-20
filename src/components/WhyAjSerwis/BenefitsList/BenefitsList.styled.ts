import styled from '@emotion/styled';
import { theme } from '../../../common/theme';
import { motion } from 'framer-motion';

export const StyledBenefitsList = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
`;

export const StyledBenefitItem = styled(motion.li)`
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledBenefitIcoContainer = styled(motion.div)`
  padding: 30px;
  width: 120px;
  height: 120px;
  border: 2px solid ${theme.colors.accentColor};
  border-radius: 50%;
`;

export const StyledBenefitText = styled(motion.p)`
  color: rgb(130, 130, 130);
  font-size: 16px;
`;

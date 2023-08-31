import styled from '@emotion/styled';
import { FaHandshake } from 'react-icons/fa';

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: 100%;
    display: block;
    width: 1px;
    height: 432px;
    background-color: #c3a069;
  }
`;

export const StyledIcon = styled(FaHandshake)`
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-radius: 50%;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  color: #f7f9fb;
`;

export const StyledSubtitle = styled.h3`
  text-align: start;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;
export const StyledList = styled.ul`
  width: 100%;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

import styled from '@emotion/styled';

export const StyledBenefitsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
`;

export const StyledBenefitItem = styled.li`
  border-radius: 7px;
  width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid #c3a069;
  border-radius: 5;
  padding: 5px 25px;
`;

export const StyledBenefitIcoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

export const StyledBenefitText = styled.p`
  color: rgb(130, 130, 130);
  font-size: 12px;
`;

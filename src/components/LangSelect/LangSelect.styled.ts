import styled from '@emotion/styled';

export const CustomSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  color: white;
  font-size: 16px;
  outline: none;
`;

export const SelectOption = styled.option`
  background: rgba(0, 0, 0, 0.5);
  color: white;
`;

export const CustomSelectImage = styled.div`
  width: 35px;
  height: 30px;
  background-size: cover;
  background-position: center;
`;

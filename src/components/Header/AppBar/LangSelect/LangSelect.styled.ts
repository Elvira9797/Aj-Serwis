import styled from '@emotion/styled';

export const StyledSelectLang = styled.select`
  appearance: none;
  background-color: transparent;
  border: 1px solid #ddd;
  padding: 8px 12px;
  font-size: 1rem;
  border-radius: 4px;
  color: #333;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

import { SyntheticEvent } from 'react-toastify/dist/utils';
import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 1px ${({ theme }) => theme.colors.primaryColor} solid;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentColor};
    border-width: 1px;
    background-color: rgba(195, 160, 105, 0.3);
  }
`;

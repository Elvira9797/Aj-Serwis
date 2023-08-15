import { Theme } from '@emotion/react';
import { theme } from './../../../common/theme';
import styled from '@emotion/styled';
// import {BsCheck} from 'react'

interface StyledLabelProps {
  focus: boolean;
  value: string;
}

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  padding-bottom: 0.2rem;
  border: none;
  border-bottom: 1px ${({ theme }) => theme.colors.primaryColor} solid;
  transition: ${({ theme }) => theme.transition.basic};
  /* border-radius: 0.5rem; */
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accentColor};
    border-width: 1px;
    /* background-color: rgba(195, 160, 105, 0.3); */
  }
`;

export const StyledLabel = styled.label<StyledLabelProps>(
  ({ focus, value, theme }) => ({
    position: 'absolute',
    transition: theme.transition.basic,
    ...getFloatLabel(focus, value, theme),
  })
);

const getFloatLabel = (
  focus: StyledLabelProps['focus'],
  value: StyledLabelProps['value'],
  theme: Theme
) => {
  if (focus) {
    return {
      top: '-10px',
      left: '10px',
      fontSize: '0.8rem',
      color: theme.colors.accentColor,
    };
  } else if (!focus && value) {
    return {
      top: '-10px',
      left: '10px',
      fontSize: '0.8rem',
      color: theme.colors.accentColor,
    };
  } else {
    return { top: '50%', transform: 'translateY(-50%)', left: '10px' };
  }
};

export const StyledCheckbox = styled.input`
  appearance: none;
  &::before {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px #000 solid;
  }
  &:checked::before {
    background-color: ${({ theme }) => theme.colors.accentColor};
    border: 1px ${({ theme }) => theme.colors.accentColor};
  }
`;

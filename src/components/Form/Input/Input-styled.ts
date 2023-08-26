import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import checked from '../../../assets/svg/checked.svg';

interface StyledLabelProps {
  focus: boolean;
  inputValue: string | undefined;
  lightTheme: boolean;
}

interface StyledInputProps {
  inputValue: string | undefined;
  focus: boolean;
  lightTheme: boolean;
}

export const InputWrapper = styled.div<{ lightTheme: boolean }>`
  width: 100%;
  position: relative;
  color: ${({ lightTheme, theme }) =>
    lightTheme === true
      ? theme.colors.primaryColor
      : theme.colors.secondaryColor};
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.8rem;
  height: 48px;
  border-radius: 0;
  padding-bottom: 0.5rem;
  font-size: ${props => (props.focus ? '1rem' : '1.2rem')};
  border: none;
  transition: ${({ theme }) => theme.transition.basic};
  outline: none;
  background-color: transparent;
  color: ${props =>
    !props.focus ? props.theme.colors.accentColor : 'inherit'};
  border-bottom: 1px
    ${({ lightTheme, inputValue, theme }) =>
      !inputValue
        ? lightTheme
          ? theme.colors.primaryColor
          : theme.colors.secondaryColor
        : theme.colors.accentColor}
    solid;
  &:focus {
    border-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const StyledLabel = styled.label<StyledLabelProps>(
  ({ focus, inputValue, theme }) => ({
    position: 'absolute',
    transition: theme.transition.basic,
    ...getFloatLabel(focus, inputValue, theme),
  })
);

const getFloatLabel = (
  focus: StyledLabelProps['focus'],
  inputValue: StyledLabelProps['inputValue'],
  theme: Theme
) => {
  if (focus) {
    return {
      top: '-10px',
      left: '10px',
      fontSize: '0.8rem',
      color: theme.colors.accentColor,
    };
  } else if (!focus && inputValue) {
    return {
      top: '-10px',
      left: '10px',
      fontSize: '0.8rem',
      color: theme.colors.accentColor,
    };
  } else {
    return {
      top: '50%',
      transform: 'translateY(-50%)',
      left: '10px',
      color: 'inherit',
    };
  }
};

export const StyledCheckbox = styled.input<{ lightTheme: boolean }>`
  appearance: none;
  &::before {
    content: '';
    display: block;
    outline: none;
    width: 16px;
    height: 16px;
    padding: 0.2rem;
    border: 1px
      ${({ lightTheme, theme }) =>
        lightTheme === true
          ? theme.colors.primaryColor
          : theme.colors.secondaryColor}
      solid;
    cursor: pointer;
  }
  &:checked::before {
    background-color: transparent;
    border: none;

    fill: #fff;
    background-image: url(${checked});
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const StyledErrorMessage = styled.small`
  font-size: 0.8rem;
  position: absolute;
  top: 110%;
  left: 0;
  color: red;
`;

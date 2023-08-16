import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import checked from '../../../assets/svg/checked.svg';

interface StyledLabelProps {
  focus: boolean;
  inputValue: string;
}

interface StyledInputProps {
  inputValue: string;
}

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.8rem;
  padding-bottom: 0.2rem;
  border: none;
  transition: ${({ theme }) => theme.transition.basic};
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryColor};
  border-bottom: 1px
    ${props =>
      props.inputValue
        ? props.theme.colors.accentColor
        : props.theme.colors.secondaryColor}
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
      color: theme.colors.secondaryColor,
    };
  }
};

export const StyledCheckbox = styled.input`
  appearance: none;
  &::before {
    content: '';
    display: block;
    width: 1rem;
    height: 1.2em;
    padding: 0.2rem;
    border: 1px #fff solid;
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

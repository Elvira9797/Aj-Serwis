import {
  CSSProperties,
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  LegacyRef,
  forwardRef,
  useState,
} from 'react';
import {
  InputWrapper,
  StyledInput,
  StyledLabel,
  StyledErrorMessage,
} from './Input-styled';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps {
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  lightTheme: boolean;
  errors: {};
  autoComplete?: 'on' | 'off';
  label: string;
  placeholder?: string;
  style?: CSSProperties;
}

const Input: FC<InputProps> = forwardRef(
  (
    {
      type,
      name,
      onChange,
      autoComplete = 'off',
      placeholder,
      style,
      value,
      label,
      errors,
      id,
      lightTheme,
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [focus, setFocus] = useState(false);
    return (
      <>
        <InputWrapper lightTheme={lightTheme}>
          <StyledInput
            id={id}
            ref={ref}
            inputValue={value}
            style={style}
            autoComplete={autoComplete}
            type={type}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            focus={focus}
            lightTheme={lightTheme}
          />
          <StyledLabel
            htmlFor={id}
            focus={focus}
            lightTheme={lightTheme}
            inputValue={value}
          >
            {label}
          </StyledLabel>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <StyledErrorMessage>{message}</StyledErrorMessage>
            )}
          />
        </InputWrapper>
      </>
    );
  }
);

export default Input;

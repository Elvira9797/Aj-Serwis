import { ChangeEventHandler, FC, LegacyRef, forwardRef, useState } from 'react';
import {
  InputWrapper,
  StyledInput,
  StyledLabel,
  StyledErrorMessage,
} from './Input-styled';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'tel';
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  errors: {};
  autoComplete?: 'on' | 'off';
  label: string;
  placeholder?: string;
  style?: {};
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
    },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [focus, setFocus] = useState(false);
    return (
      <>
        <InputWrapper>
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
          />
          <StyledLabel htmlFor={id} focus={focus} inputValue={value}>
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

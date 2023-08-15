import { ChangeEventHandler, FC, LegacyRef, forwardRef, useState } from 'react';
import { InputWrapper, StyledInput, StyledLabel } from './Input-styled';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'tel';
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: 'on' | 'off';
  label: string;
  placeholder?: string;
  style?: {};
}

const Input: FC<InputProps> = forwardRef(
  (
    { type, name, onChange, autoComplete = 'off', placeholder, style, value, label },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [focus, setFocus] = useState(false);

    return (
      <InputWrapper>
        <StyledInput
          ref={ref}
          style={style}
          autoComplete={autoComplete}
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
        <StyledLabel focus={focus} value={value}>
          {label}
        </StyledLabel>
      </InputWrapper>
    );
  }
);

export default Input;

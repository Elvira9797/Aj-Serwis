import { ChangeEventHandler, FC, LegacyRef, forwardRef } from 'react';
import { StyledInput } from './Input-styled';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'tel';
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  style?: {};
}

const Input: FC<InputProps> = forwardRef(
  (
    { type, name, onChange, autoComplete = 'off', placeholder, style },
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <StyledInput
        ref={ref}
        style={style}
        autoComplete={autoComplete}
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    );
  }
);

export default Input;

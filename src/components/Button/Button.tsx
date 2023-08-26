import { CSSProperties, FC, ReactNode } from 'react';
import { StyledBtn } from './Button-styled';

interface ButtonProps {
  children: ReactNode;
  variant: 'hero' | 'form' | 'card';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: CSSProperties;
  lightTheme?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  type = 'button',
  onClick,
  style,
  lightTheme,
  disabled,
}) => {
  return (
    <>
      <StyledBtn
        style={style}
        lightTheme={lightTheme}
        type={type}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
      >
        <span>{children}</span>
      </StyledBtn>
    </>
  );
};

export default Button;

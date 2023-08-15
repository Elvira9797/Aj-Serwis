import { FC, ReactNode } from 'react';
import { StyledBtn } from './Button-styled';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: {};
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  size,
  type = 'button',
  onClick,
  style,
}) => {
  return (
    <>
      <StyledBtn
        style={style}
        type={type}
        variant={variant}
        size={size}
        onClick={onClick}
      >
        {children}
      </StyledBtn>
    </>
  );
};

export default Button;

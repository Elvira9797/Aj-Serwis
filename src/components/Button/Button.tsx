import { CSSProperties, FC, ReactNode } from 'react';
import { StyledBtn } from './Button-styled';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
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
        onClick={onClick}
      >
        <span>{children}</span>
      </StyledBtn>
    </>
  );
};

export default Button;

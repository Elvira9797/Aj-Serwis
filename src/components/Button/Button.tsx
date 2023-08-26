import { CSSProperties, FC, ReactNode } from 'react';
import { StyledBtn } from './Button-styled';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  style?: CSSProperties;
  lightTheme?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  type = 'button',
  onClick,
  style,
  lightTheme,
}) => {
  console.log('lightTheme: ', lightTheme);
  return (
    <>
      <StyledBtn
        style={style}
        lightTheme={lightTheme}
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

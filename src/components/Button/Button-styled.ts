import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

interface StyledButton {
  variant: 'primary' | 'secondary';
  lightTheme?: boolean;
}

export const StyledBtn = styled.button<StyledButton>(
  ({ theme, variant, lightTheme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: ${theme.colors.secondaryColor};
    cursor: pointer;
    border: none;
    font-size: 0.8rem;
    background-color: transparent;
    font-weight: ${theme.typography.fontWeight.regular};
    transition: ${theme.transition.basic};
    transition-delay: 75ms;
    text-transform: uppercase;
    
    
    ${getVariantStyles(variant, theme, lightTheme)}
  `
);

const getVariantStyles = (
  variant: StyledButton['variant'],
  theme: Theme,
  lightTheme: StyledButton['lightTheme']
) => {
  switch (variant) {
    case 'primary':
      return css`
        padding: 0.4rem 1rem;
        padding-left: 1.5rem;
        &:before {
          content: '';
          background-color: ${theme.colors.accentColor};
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          border-radius: 50px;
          display: block;
          width: 45px;
          height: 45px;
          transition: ${theme.transition.basic};
          transition-delay: 75ms;
        }
        &:hover {
          padding-left: 1rem;
        }
        span {
          position: relative;
          color: ${lightTheme
            ? theme.colors.primaryColor
            : theme.colors.secondaryColor};
          transition: ${theme.transition.basic};
          transition-delay: 75ms;
        }

        &:hover:before {
          width: 100%;
          background-color: ${lightTheme
            ? theme.colors.primaryColor
            : theme.colors.secondaryColor};
        }
        &:hover span {
          color: ${lightTheme
            ? theme.colors.secondaryColor
            : theme.colors.primaryColor};
          font-weight: ${theme.typography.fontWeight.semiBold};
        }
        @media (max-width: 768px) {
          &:before {
            display: none;
          }
          padding: 0.8rem 2rem;
          background-color: ${theme.colors.accentColor};
          border-radius: 0.5rem;
          &:hover {
            padding-left: 2rem;
            span {
              color: ${theme.colors.secondaryColor};
            }
          }
        }
      `;
    case 'secondary':
      return css`
        width: 100%;
        background-color: ${theme.colors.primaryColor};
        border-color: ${theme.colors.primaryColor};
        border-radius: 4;
        padding: 0.6rem 4rem;
        &:hover {
          color: ${theme.colors.accentColor};
          font-weight: ${theme.typography.fontWeight.regular};
        }
      `;
  }
};

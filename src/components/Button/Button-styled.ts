import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

interface StyledButton {
  variant: 'hero' | 'form' | 'card';
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
    color: ${lightTheme
      ? theme.colors.primaryColor
      : theme.colors.secondaryColor};

    ${getVariantStyles(variant, theme, lightTheme)}
  `
);

const getVariantStyles = (
  variant: StyledButton['variant'],
  theme: Theme,
  lightTheme: StyledButton['lightTheme']
) => {
  switch (variant) {
    case 'hero':
      return css`
        padding: 0.4rem 1rem;
        text-transform: none;
        font-size: 1rem;
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
          /* transition-delay: 75ms; */
        }

        span {
          position: relative;
          color: inherit;
          transition: ${theme.transition.basic};
          transition-delay: 75ms;
          font-weight: ${theme.typography.fontWeight.semiBold};
        }

        &:hover:before {
          width: 100%;
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
    case 'form':
      return css`
        background-color: ${theme.colors.accentColor};
        padding: 0.6rem 4rem;
        border-radius: 0.5rem;
        font-weight: 700;

        &:hover:enabled {
          background-color: ${lightTheme
            ? theme.colors.primaryColor
            : theme.colors.secondaryColor};
          color: ${lightTheme
            ? theme.colors.secondaryColor
            : theme.colors.primaryColor};
          /* transform: scale(1.02); */
        }
        &:active:enabled {
          transition: none;
          transform: scale(1.02);
        }
        &:disabled {
          background-color: ${theme.colors.accentColor};
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
    case 'card':
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

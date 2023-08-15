import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

interface StyledButton {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
}

export const StyledBtn = styled.button<StyledButton>(
  ({ theme, size, variant }) => ({
    fontFamily: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    outline: 'none',
    borderRadius: '0.5rem',
    fontWeight: theme.typography.fontWeight.semiBold,
    transition: theme.transition.basic,
    ...getSize(size),
    ...getVariant(variant, theme),
  })
);

const getSize = (size: StyledButton['size']) => {
  switch (size) {
    case 'sm':
      return { padding: '0.5rem 2rem' };
    case 'md':
      return { padding: '0.6rem 4rem' };
    case 'lg':
      return { padding: '0.7rem 6rem' };
  }
};

const getVariant = (variant: StyledButton['variant'], { colors }: Theme) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: colors.primaryColor,
        border: `1px ${colors.primaryColor} solid`,
        color: colors.secondaryColor,
        '&:hover': {
          backgroundColor: colors.accentColor,
          color: colors.secondaryColor,
          borderColor: colors.accentColor,
        },
      };
    case 'secondary':
      return {
        backgroundColor: 'transparent',
        border: `1px ${colors.primaryColor} solid`,
        color: colors.primaryColor,
        '&:hover': {
          backgroundColor: colors.accentColor,
          color: colors.secondaryColor,
          borderColor: colors.accentColor,
        },
      };
  }
};

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Theme } from '@emotion/react';

interface LogoProps {
  loc: 'header' | 'footer';
  size: 'lg' | 'md';
}

export const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  text-decoration: none;
`;

export const StyledImg = styled.img<LogoProps>(({ size }) => ({
  ...getSizeLogo(size),
}));

export const StyledLogoText = styled.span<LogoProps>(
  ({ theme, loc, size }) => ({
    display: 'flex',
    flexDirection: 'column',
    fontWeight: theme.typography.fontWeight.bold,
    ...getFontSize(size),
    ...getLocStyles(loc, theme),
  })
);

const getLocStyles = (loc: LogoProps['loc'], theme: Theme) => {
  switch (loc) {
    case 'header':
      return { color: theme.colors.accentColor };
    case 'footer':
      return { color: theme.colors.secondaryColor };
  }
};

const getFontSize = (size: LogoProps['size']) => {
  switch (size) {
    case 'lg':
      return { fontSize: '1.5rem' };
    case 'md':
      return { fontSize: '1.2rem' };
  }
};

const getSizeLogo = (size: LogoProps['size']) => {
  switch (size) {
    case 'lg':
      return { height: '4.8rem', width: '4.8rem' };
    case 'md':
      return {
        height: '3.8rem',
        width: '3.8rem',
      };
    default:
      return { height: '4.8rem', width: '4.8rem' };
  }
};

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Theme } from '@emotion/react';

interface LogoTextProps {
  loc: 'header' | 'footer';
}

export const StyledLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  text-decoration: none;
`;

export const StyledImg = styled.img`
  height: 4.8rem;
  width: 4.8rem;
`;

export const StyledLogoText = styled.span<LogoTextProps>(({ theme, loc }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: '1.5rem',

  ...getlocStyles(loc, theme),
}));

const getlocStyles = (loc: LogoTextProps['loc'], theme: Theme) => {
  switch (loc) {
    case 'header':
      return { color: theme.colors.accentColor };
    case 'footer':
      return { color: theme.colors.secondaryColor };
  }
};

import styled from '@emotion/styled';

interface StyledSocLinkWraperProps {
  size?: number;
}

export const StyledSocLinkWraper = styled.div<StyledSocLinkWraperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  svg {
    font-size: ${props => props.size || '16px'};
  }

  a {
    display: inline-block;
    transition: transform 0.3s;
  }

  a:hover .icon {
    transform: scale(1.2);
  }
`;

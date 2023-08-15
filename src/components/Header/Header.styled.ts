import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.bgColor};
`;

export const Divider = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

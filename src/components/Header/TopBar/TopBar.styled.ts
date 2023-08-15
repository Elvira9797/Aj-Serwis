import styled from '@emotion/styled';

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTopBar = styled(Wraper)`
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1px 0 1px 0;
`;

export const StyledNavWrader = styled(Wraper)`
  gap: 4px;
`;

export const StyledSocLinkWraper = styled(Wraper)`
  gap: 4px;
`;

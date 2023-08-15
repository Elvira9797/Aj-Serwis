import AppBar from './AppBar/AppBar';
import TopBar from './TopBar/TopBar';
import { Divider, StyledHeader } from './Header.styled';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Divider>
        <TopBar />
      </Divider>

      <AppBar />
    </StyledHeader>
  );
};

export default Header;

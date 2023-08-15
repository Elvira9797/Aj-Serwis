import AppBar from './AppBar/AppBar';
import TopBar from './TopBar/TopBar';
import { Container, StyledHeader } from './Header.styled';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <TopBar />
      </Container>
      <Container>
        <AppBar />
      </Container>
    </StyledHeader>
  );
};

export default Header;

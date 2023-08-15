import LangSelect from './LangSelect/LangSelect';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import { StyledAppBar, StyledNavWraper } from './AppBar.styled';

const AppBar: React.FC = () => {
  return (
    <StyledAppBar>
      <Logo />
      <StyledNavWraper>
        <Nav />
        <LangSelect />
      </StyledNavWraper>
    </StyledAppBar>
  );
};

export default AppBar;

import LangSelect from './LangSelect/LangSelect';
import Logo from '../../Logo/Logo';
import Nav from './Nav/Nav';
import { BurgerButton, StyledAppBar, StyledNavWraper } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';

interface AppBarProps {
  isOpenModal: boolean;
  onClick: () => void;
  theme: {
    colors: { accentColor: string };
  };
}

const AppBar: React.FC<AppBarProps> = ({ isOpenModal, onClick, theme }) => {
  return (
    <StyledAppBar>
      <Logo loc="header" size="md" />
      <StyledNavWraper>
        <Nav />
        <LangSelect />
      </StyledNavWraper>
      <BurgerButton onClick={onClick} type="button">
        {!isOpenModal && (
          <GiHamburgerMenu
            size={30}
            style={{ color: theme.colors.accentColor }}
          />
        )}
      </BurgerButton>
    </StyledAppBar>
  );
};

export default AppBar;

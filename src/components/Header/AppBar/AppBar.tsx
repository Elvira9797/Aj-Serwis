import LangSelect from '../../LangSelect/LangSelect';
import Navigation from '../../Navigation/Navigation';
import Logo from '../../Logo/Logo';

import { GiHamburgerMenu } from 'react-icons/gi';

import { BurgerButton, StyledAppBar, StyledNavWraper } from './AppBar.styled';
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
        <Navigation flexDirection="row" />

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

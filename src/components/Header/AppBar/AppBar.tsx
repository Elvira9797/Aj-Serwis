import LangSelect from './LangSelect/LangSelect';
import Logo from '../../Logo/Logo';
import Nav from './Nav/Nav';
import { BurgerButton, StyledAppBar, StyledNavWraper } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

interface AppBarProps {
  isOpenModal: boolean;
  modalToggle: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ isOpenModal, modalToggle }) => {
  return (
    <StyledAppBar>
      <Logo loc="header" size="md" />
      <StyledNavWraper>
        <Nav />
        <LangSelect />
      </StyledNavWraper>
      <BurgerButton onClick={modalToggle} type="button">
        {isOpenModal ? <GrClose size={30} /> : <GiHamburgerMenu size={30} />}
      </BurgerButton>
    </StyledAppBar>
  );
};

export default AppBar;

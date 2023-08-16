import AppBar from './AppBar/AppBar';
import TopBar from './TopBar/TopBar';
import { Divider, StyledHeader } from './Header.styled';
import MobileMenu from './MobileMneu/MobileMenu';
import { useState } from 'react';
import { theme } from '../../common/theme';

const Header: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalToggle = () => {
    setOpenModal(prevState => !prevState);
    setIsOpenModal(prevState => !prevState);
  };

  return (
    <StyledHeader>
      <Divider>
        <TopBar />
      </Divider>
      <AppBar isOpenModal={isOpenModal} modalToggle={modalToggle} />
      {openModal && (
        <MobileMenu
          modalToggle={modalToggle}
          theme={theme}
          isOpen={isOpenModal}
        />
      )}
    </StyledHeader>
  );
};

export default Header;

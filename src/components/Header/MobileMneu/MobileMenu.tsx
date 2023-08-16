import { useEffect } from 'react';
import LangSelect from '../AppBar/LangSelect/LangSelect';
import {
  ContactWraper,
  ModalMobileMenu,
  Overlay,
  StyledNavList,
  StyledNavWrader,
} from './MobileMenu.styled';
import { NavLink } from 'react-router-dom';
import { BiMailSend } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';

interface MobileMenuProps {
  modalToggle: () => void;
  theme: {
    colors: {
      accentColor: string;
      lightGrey: string;
    };
  };
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  modalToggle,
  theme,
  isOpen,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        modalToggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [modalToggle]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      modalToggle();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalMobileMenu isOpen={isOpen}>
        <nav>
          <StyledNavList>
            <li>
              <NavLink
                to="/"
                onClick={modalToggle}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vacancies "
                onClick={modalToggle}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                Vacancies
              </NavLink>
            </li>
          </StyledNavList>
        </nav>

        <StyledNavWrader>
          <a href="mailto:aj.serwis.spzoo@gmail.com">
            <BiMailSend style={{ marginRight: '4px' }} />
            aj.serwis.spzoo@gmail.com
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <BsPhoneVibrateFill
              size={36}
              style={{ color: theme.colors.accentColor }}
            />
            <span
              style={{
                color: theme.colors.lightGrey,
                fontSize: '0.6rem',
              }}
            >
              Mon-Fri from 8:00 AM to 7:00 PM.
            </span>
          </div>

          <div>
            <ContactWraper>
              <span>MOISEIKO VASYL</span>{' '}
              <a href="tel:+48539649808">
                <FaPhone /> +48 539 649 808
              </a>
            </ContactWraper>
            <ContactWraper>
              <span>KORNACKI JAKUB</span>{' '}
              <a href="tel:+48797993183">
                <FaPhone /> +48 797 993 183
              </a>
            </ContactWraper>
            <ContactWraper>
              <span>ALEKSANDER ARTEMJEW</span>{' '}
              <a href="tel:+48777777777">
                <FaPhone /> +48 777 777 777
              </a>
            </ContactWraper>
          </div>
        </StyledNavWrader>
        <LangSelect />
      </ModalMobileMenu>
    </Overlay>
  );
};

export default MobileMenu;

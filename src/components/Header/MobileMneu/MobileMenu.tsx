import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ContactWraper,
  ModalMobileMenu,
  StyledNavList,
  StyledNavWrader,
  CloseButton,
  Overlay,
} from './MobileMenu.styled';
import { NavLink } from 'react-router-dom';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';
import LangSelect from '../AppBar/LangSelect/LangSelect';
import { BiMailSend } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: {
    colors: {
      accentColor: string;
      lightGrey: string;
    };
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, theme }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay>
          <motion.div
            onClick={handleOverlayClick}
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div
              className="modal-content"
              initial={{ x: '100%' }}
              animate={{ x: '44% ' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ModalMobileMenu>
                <CloseButton type="button" onClick={onClose}>
                  <VscChromeClose
                    size={32}
                    style={{ color: theme.colors.accentColor }}
                  />
                </CloseButton>
                <nav>
                  <StyledNavList>
                    <li>
                      <NavLink
                        to="/"
                        onClick={onClose}
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
                        onClick={onClose}
                        className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                        }
                      >
                        Vacancies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contacts "
                        onClick={onClose}
                        className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                        }
                      >
                        Contacts
                      </NavLink>
                    </li>
                  </StyledNavList>
                </nav>

                <StyledNavWrader>
                  <a href="mailto:aj.serwis.spzoo@gmail.com">
                    <BiMailSend style={{ marginRight: '4px' }} />
                    aj.serwis.spzoo@gmail.com
                  </a>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
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
                      <a href="tel:+48539649808">
                        <FaPhone /> +48 539 649 808
                      </a>
                    </ContactWraper>
                    <ContactWraper>
                      <a href="tel:+48797993183">
                        <FaPhone /> +48 797 993 183
                      </a>
                    </ContactWraper>
                    <ContactWraper>
                      <a href="tel:+48777777777">
                        <FaPhone /> +48 777 777 777
                      </a>
                    </ContactWraper>
                  </div>
                </StyledNavWrader>
                <LangSelect />
              </ModalMobileMenu>
            </motion.div>
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;

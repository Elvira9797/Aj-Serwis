import { useEffect } from 'react';

import Navigation from '../../Navigation/Navigation';
import ContactsDisplay from '../../ContactsDisplay/ContactsDisplay';
import LangSelect from '../../LangSelect/LangSelect';

import { motion, AnimatePresence } from 'framer-motion';
import { VscChromeClose } from 'react-icons/vsc';

import { ModalMobileMenu, CloseButton, Overlay } from './MobileMenu.styled';
import { useAppContext } from '../../../context/AppContext';

interface ModalProps {
  theme: {
    colors: {
      accentColor: string;
      lightGrey: string;
    };
  };
}

const Modal: React.FC<ModalProps> = ({ theme }) => {
  const { closeModal, isOpenModal } = useAppContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    if (isOpenModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, isOpenModal]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpenModal && (
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
                <CloseButton type="button" onClick={closeModal}>
                  <VscChromeClose
                    size={32}
                    style={{ color: theme.colors.accentColor }}
                  />
                </CloseButton>
                <Navigation flexDirection="column" />
                <ContactsDisplay displayName="none" />
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

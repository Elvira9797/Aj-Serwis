import { useEffect } from 'react';

import Navigation from '../../Navigation/Navigation';
import ContactsDisplay from '../../ContactsDisplay/ContactsDisplay';
import LangSelect from '../AppBar/LangSelect/LangSelect';

import { motion, AnimatePresence } from 'framer-motion';
import { VscChromeClose } from 'react-icons/vsc';

import { ModalMobileMenu, CloseButton, Overlay } from './MobileMenu.styled';

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

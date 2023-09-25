import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

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

  const swipeHandlers = useSwipeable({ onSwipedRight: () => closeModal() });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    isOpenModal
      ? document.body.classList.add('modal-open')
      : document.body.classList.remove('modal-open');

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
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0%' }}
            exit={{ translateX: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            {...swipeHandlers}
          >
            <motion.div
              className="modal-content"
              initial={{ translateX: '100%' }}
              animate={{ translateX: '44%' }}
              exit={{ translateX: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
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

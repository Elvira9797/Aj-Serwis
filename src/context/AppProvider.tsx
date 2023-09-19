import React, { useState, ReactNode } from 'react';
import AppContext from './AppContext';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const saveScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  const restoreScrollPosition = () => {
    window.scrollTo(0, scrollPosition);
  };

  const openModal = () => {
    setModalOpen(true);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsOpenModal(false);
  };

  const appContextValue = {
    saveScrollPosition,
    restoreScrollPosition,
    modalOpen,
    openModal,
    closeModal,
    isOpenModal,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

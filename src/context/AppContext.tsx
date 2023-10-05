import { createContext, useContext } from 'react';

interface AppContextProps {
  modalOpen: boolean;
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  saveScrollPosition: () => void;
  restoreScrollPosition: () => void;
  setScrollPosition: (position: number) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

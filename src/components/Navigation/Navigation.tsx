import { NavLink } from 'react-router-dom';

import { StyledNavList } from './Navigation.styled';

import { useAppContext } from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

interface NavigationProps {
  flexDirection: 'row' | 'column';
}

const Navigation: React.FC<NavigationProps> = ({ flexDirection }) => {
  const { closeModal, setScrollPosition } = useAppContext();
  const { t } = useTranslation();

  const res = i18n.resolvedLanguage;

  const handleCloseModal = () => {
    closeModal();
    setScrollPosition(0);
  };

  return (
    <nav>
      <StyledNavList flexDirection={flexDirection}>
        <li>
          <NavLink
            onClick={handleCloseModal}
            to={`/?lang=${res}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            state={{ languageChange: false }}
          >
            {t('main.nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleCloseModal}
            to={`/vacancies?lang=${res}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            state={{ languageChange: false }}
          >
            {t('main.nav.vacancies')}
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleCloseModal}
            to={`/contacts?lang=${res}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            state={{ languageChange: false }}
          >
            {t('main.nav.contacts')}
          </NavLink>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default Navigation;

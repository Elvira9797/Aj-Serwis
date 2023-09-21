import { NavLink, useLocation } from 'react-router-dom';

import { StyledNavList } from './Navigation.styled';

import { useAppContext } from '../../context/AppContext';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

interface NavigationProps {
  flexDirection: 'row' | 'column';
}

const Navigation: React.FC<NavigationProps> = ({ flexDirection }) => {
  const { closeModal } = useAppContext();
  const { t } = useTranslation();
  const location = useLocation();

  const res = i18n.resolvedLanguage;

  return (
    <nav>
      <StyledNavList flexDirection={flexDirection}>
        <li>
          <NavLink
            onClick={closeModal}
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
            onClick={closeModal}
            to={`/vacancies?lang=${res}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
            state={{ from: location, languageChange: false }}
          >
            {t('main.nav.vacancies')}
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeModal}
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

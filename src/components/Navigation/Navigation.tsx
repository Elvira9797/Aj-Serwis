import { NavLink, useNavigate } from 'react-router-dom';

import { StyledNavList } from './Navigation.styled';

import { useAppContext } from '../../context/AppContext';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  flexDirection: 'row' | 'column';
}

const Navigation: React.FC<NavigationProps> = ({ flexDirection }) => {
  const { closeModal } = useAppContext();
  const { t } = useTranslation();

  return (
    <nav>
      <StyledNavList flexDirection={flexDirection}>
        <li>
          <NavLink
            onClick={closeModal}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {t('main.nav.home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeModal}
            to="/vacancies"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {t('main.nav.vacancies')}
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeModal}
            to="/contacts"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            {t('main.nav.contacts')}
          </NavLink>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default Navigation;

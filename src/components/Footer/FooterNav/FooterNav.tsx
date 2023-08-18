import { StyledNavList } from './FooterNav.styled';
import { NavLink } from 'react-router-dom';

const FooterNav: React.FC = () => {
  return (
    <nav>
      <StyledNavList>
        <li>
          <NavLink
            to="/"
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
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Contacts
          </NavLink>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default FooterNav;

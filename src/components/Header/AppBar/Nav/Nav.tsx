import { NavLink } from 'react-router-dom';
import { StyledNavList } from './Nav.styled';

const Nav: React.FC = () => {
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
            to="/vacancies"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Vacancies
          </NavLink>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default Nav;

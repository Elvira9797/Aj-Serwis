import { NavLink } from 'react-router-dom';
import { StyledNavList } from './Nav.styled';

const Nav: React.FC = () => {
  return (
    <nav>
      <StyledNavList>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/vacancies">Vacancies</NavLink>
        </li>
        <li>
          <NavLink to="/">About us</NavLink>
        </li>
        <li>
          <NavLink to="/">Contacts</NavLink>
        </li>
      </StyledNavList>
    </nav>
  );
};

export default Nav;

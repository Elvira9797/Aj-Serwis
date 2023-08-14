import { NavLink } from 'react-router-dom';
import { StyledNavList } from './Nav.styled';

function Nav() {
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
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </StyledNavList>
    </nav>
  );
}

export default Nav;

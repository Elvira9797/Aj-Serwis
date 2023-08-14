import { NavLink } from 'react-router-dom';
import {} from './Header.styled';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/vacancies">Vacancies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

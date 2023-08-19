import { NavLink } from 'react-router-dom';

import { StyledNavList } from './Navigation.styled';

import { dataNavigation } from '../../common/dataNavigation';

interface NavigationProps {
  flexDirection: 'row' | 'column';
}

const Navigation: React.FC<NavigationProps> = ({ flexDirection }) => {
  return (
    <nav>
      <StyledNavList flexDirection={flexDirection}>
        {dataNavigation.map(({ page, link }) => (
          <li key={link}>
            <NavLink
              to={link}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              {page}
            </NavLink>
          </li>
        ))}
      </StyledNavList>
    </nav>
  );
};

export default Navigation;

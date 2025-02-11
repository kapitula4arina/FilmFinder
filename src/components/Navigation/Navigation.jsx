import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => (
  <header className={css.header}>
    <nav className={css.navContainer}>
      <ul className={css.navlinks}>
        <li className={css.linkItem}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.linkItem}>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;

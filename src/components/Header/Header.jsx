import clsx from 'clsx';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => (
  <header className={css.header}>
    <div className={css.navContainer}>
      <NavLink to="/" className={css.logo}>
        <FaFilm className={css.icon} />
        FilmFinder
      </NavLink>
      <nav>
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
    </div>
  </header>
);

export default Header;

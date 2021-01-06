import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import S from './style.module.scss';

const Header = () => (
  <ul className={S.list}>
    <li className={S.list__item}>
      <NavLink
        exact
        to={routes.HOME}
        className={S.item__link}
        activeClassName={S.active__link}
      >
        Home
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        exact
        to={routes.CONTACTS}
        className={S.item__link}
        activeClassName={S.active__link}
      >
        Contacts
      </NavLink>
    </li>
    <li className={S.list__item}>
      <NavLink
        to={routes.ABOUT}
        className={S.item__link}
        activeClassName={S.active__link}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Header;

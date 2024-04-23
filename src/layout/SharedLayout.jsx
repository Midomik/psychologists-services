import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { BurgerMenuIcon, UserIcon } from 'assets/sprite';

export const SharedLayout = () => {
  return (
    <div className="container">
      <header>
        <Link className={css.logo} to="/">
          <span>psychologists</span>
          <span>.</span>
          <span>services</span>
        </Link>

        <div className={css.pages_container}>
          <NavLink className={css.nav_link} to="/">
            Home
          </NavLink>
          <NavLink className={css.nav_link} to="psychologists">
            Psychologists
          </NavLink>

          <NavLink
            className={`${css.nav_link} ${false && css.visually_hidden}`}
            to="favorites"
          >
            Favorites
          </NavLink>
        </div>

        <div className={css.auth_container}>
          <button className={css.auth_btn}>LogIn</button>
          <button className={css.auth_btn}>Registration</button>
        </div>

        {false && (
          <div className={css.avatar_container}>
            <div className={css.icon_container}>
              <UserIcon />
            </div>
            <p className={css.user_title}>{'User'}</p>
          </div>
        )}

        <div className={css.burger_menu_container}>
          <BurgerMenuIcon />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

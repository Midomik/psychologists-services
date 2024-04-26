import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { BurgerMenuIcon, UserIcon } from 'assets/sprite';
import {
  setOpenSignInModal,
  setOpenSignUpModal,
} from '../redux/modal/modal.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpModal } from 'components/SignUpModal/SignUpModal';
import {
  selectIsOpenBookingModal,
  selectIsOpenSignInModal,
  selectIsOpenSignUpModal,
} from '../redux/modal/modal.selectors';
import { BookingModal } from 'components/BookingModal/BookingModal';
import { SignInModal } from 'components/SignInModal/SignInModal';

export const SharedLayout = () => {
  const location = useLocation();
  const body = document.body;
  const dispatch = useDispatch();
  const isOpenSignInModal = useSelector(selectIsOpenSignInModal);
  const isOpenSignUpModal = useSelector(selectIsOpenSignUpModal);
  const isOpneBookingModal = useSelector(selectIsOpenBookingModal);

  useEffect(() => {
    location.pathname === '/'
      ? body.classList.add('add-background')
      : body.classList.remove('add-background');
  }, [location.pathname, body]);

  return (
    <>
      <header>
        <div className={`container ${css.header_container}`}>
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
            <button
              onClick={() => dispatch(setOpenSignInModal())}
              className={css.auth_btn}
            >
              LogIn
            </button>
            <button
              onClick={() => dispatch(setOpenSignUpModal())}
              className={css.auth_btn}
            >
              Registration
            </button>
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
        </div>
        <div className={css.line}></div>
      </header>
      <main>
        <Outlet />
        {isOpenSignUpModal && <SignUpModal />}
        {isOpenSignInModal && <SignInModal />}
        {isOpneBookingModal && <BookingModal />}
      </main>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
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
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { userSignOut } from '../redux/auth/auth.operations';

import { isAuth } from '../redux/auth/auth.reducer';

export const SharedLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const body = document.body;
  const dispatch = useDispatch();
  const isOpenSignInModal = useSelector(selectIsOpenSignInModal);
  const isOpenSignUpModal = useSelector(selectIsOpenSignUpModal);
  const isOpneBookingModal = useSelector(selectIsOpenBookingModal);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        dispatch(isAuth(true));
      } else {
        setUser(user);
        dispatch(isAuth(false));
      }
    });
    return () => listen();
    //eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   const auth = getAuth();
  //   setUser(auth.currentUser);
  // }, []);
  const handlerSignOut = () => {
    if (location.pathname === '/favorites') {
      navigate('/psychologists');
      dispatch(userSignOut());
    } else {
      dispatch(userSignOut());
    }
  };

  useEffect(() => {
    location.pathname === '/'
      ? body.classList.add('add-background')
      : body.classList.remove('add-background');
  }, [location.pathname, body]);

  // console.log(isUserAuth);
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

            {user && (
              <NavLink
                className={`${css.nav_link} ${false && css.visually_hidden}`}
                to="favorites"
              >
                Favorites
              </NavLink>
            )}
          </div>

          {!user && (
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
          )}

          {user && (
            <div className={css.avatar_container}>
              <div className={css.icon_container}>
                <UserIcon />
              </div>
              <p className={css.user_title}>{user && user.displayName}</p>
              <button onClick={() => handlerSignOut()} className={css.auth_btn}>
                Log out
              </button>
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

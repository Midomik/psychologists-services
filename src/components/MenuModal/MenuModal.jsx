import React, { useEffect } from 'react';
import css from './MenuModal.module.css';
import { CloseIcon, UserIcon } from 'assets/sprite';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCloseModal,
  setOpenSignInModal,
  setOpenSignUpModal,
} from '../../redux/modal/modal.reducer';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { selectIsAuth, selectUserName } from '../../redux/auth/auth.selectors';
import { userSignOut } from '../../redux/auth/auth.operations';

export const MenuModal = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userName = useSelector(selectUserName);
  const user = useSelector(selectIsAuth);
  const closeModal = () => {
    dispatch(setCloseModal());
    document.body.classList.remove('add-overflov');
  };
  const closeModalFromOverlay = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const closeModalFromEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
    // eslint-disable-next-line
  }, []);
  
  const handlerSignOut = () => {
    if (location.pathname === '/favorites') {
      navigate('/psychologists');
      dispatch(userSignOut());
    } else {
      dispatch(userSignOut());
    }
  };

  return (
    <div onClick={closeModalFromOverlay} className={css.modal_owerlay}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.close_btn}>
          <CloseIcon />
        </button>

        <div className={css.pages_container}>
          <NavLink
            className={css.nav_link_menu}
            onClick={() => closeModal()}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => closeModal()}
            className={css.nav_link_menu}
            to="psychologists"
          >
            Psychologists
          </NavLink>

          {user && (
            <NavLink
              onClick={() => closeModal()}
              className={`${css.nav_link_menu} ${false && css.visually_hidden}`}
              to="favorites"
            >
              Favorites
            </NavLink>
          )}
        </div>

        {!user && (
          <div className={css.auth_container}>
            <button
              onClick={() => {
                closeModal();
                dispatch(setOpenSignInModal());
              }}
              className={css.auth_btn}
            >
              LogIn
            </button>
            <button
              onClick={() => {
                closeModal();
                dispatch(setOpenSignUpModal());
              }}
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
            <p className={css.user_title}>{userName && userName}</p>
            <button onClick={() => handlerSignOut()} className={css.auth_btn}>
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

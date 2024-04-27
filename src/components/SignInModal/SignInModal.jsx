import React, { useEffect, useState } from 'react';
import css from './SignInModal.module.css';
import { CloseIcon, EyeOffIcon, EyeOnIcon } from 'assets/sprite';
import { useDispatch } from 'react-redux';
import {
  setCloseModal,
  setOpenSignUpModal,
} from '../../redux/modal/modal.reducer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInModalSchema } from 'utils/modalSchemes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { saveData } from '../../redux/auth/auth.reducer';

export const SignInModal = () => {
  const dispatch = useDispatch();
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(signInModalSchema),
  });

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
  const handlerSubmit = async data => {
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    
    dispatch(saveData({ email: data.email, name: user.displayName }));
    reset({ name: '', email: '', password: '' });
    closeModal();
  };
  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);

    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div onClick={closeModalFromOverlay} className={css.modal_owerlay}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.close_btn}>
          <CloseIcon />
        </button>

        <h2 className={css.sign_in_title}>Log In</h2>
        <p className={css.sign_in_descr}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>

        <form
          onSubmit={handleSubmit(handlerSubmit)}
          className={css.sign_in_form}
        >
          <label className={css.email_label}>
            <input
              autoComplete="current-password"
              placeholder="Email"
              className={css.email_field}
              type="text"
              style={{
                borderColor: errors.email ? 'red' : 'rgba(25, 26, 21, 0.1)',
              }}
              {...register('email')}
            />
            {errors.email && (
              <p className={css.error_title}>{errors.email.message}</p>
            )}
          </label>

          <label className={css.password_label}>
            <input
              autoComplete="current-password"
              placeholder="Password"
              className={css.password_field}
              type={isVisiblePassword ? 'text' : 'password'}
              style={{
                borderColor: errors.password ? 'red' : 'rgba(25, 26, 21, 0.1)',
              }}
              {...register('password')}
            />
            {errors.password && (
              <p className={css.error_title}>{errors.password.message}</p>
            )}
            <div
              onMouseDown={() => setIsvisiblePassword(true)}
              onMouseUp={() => setIsvisiblePassword(false)}
              onMouseLeave={() => setIsvisiblePassword(false)}
              className={css.eye_container}
            >
              {isVisiblePassword ? <EyeOnIcon /> : <EyeOffIcon />}
            </div>
          </label>

          <button className={css.submit_form_btn} type="submit">
            Log In
          </button>
        </form>
        <button
          className={css.sign_up_btn}
          onClick={() => {
            closeModal();
            dispatch(setOpenSignUpModal());
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

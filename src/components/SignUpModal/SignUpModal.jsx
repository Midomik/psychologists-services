import React, { useEffect, useState } from 'react';
import css from './SignUpModal.module.css';
import { CloseIcon, EyeOffIcon, EyeOnIcon } from 'assets/sprite';
import { useDispatch } from 'react-redux';
import { setCloseModal } from '../../redux/modal/modal.reducer';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpModalSchema } from 'utils/modalSchemes';

export const SignUpModal = () => {
  const dispatch = useDispatch();
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(signUpModalSchema),
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
  const handlerSubmit = data => {
    reset({ name: '', email: '', password: '' });
    console.log(data);
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

        <h2 className={css.sign_up_title}>Registration</h2>
        <p className={css.sign_up_descr}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>

        <form
          onSubmit={handleSubmit(handlerSubmit)}
          className={css.sign_up_form}
        >
          <label className={css.name_label}>
            <input
              autoComplete="current-password"
              className={css.name_field}
              placeholder="Name"
              type="text"
              style={{
                borderColor: errors.name ? 'red' : 'rgba(25, 26, 21, 0.1)',
              }}
              {...register('name')}
            />
            {errors.name && (
              <p className={css.error_title}>{errors.name.message}</p>
            )}
          </label>

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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

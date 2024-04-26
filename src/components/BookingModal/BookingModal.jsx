import React, { useEffect } from 'react';
import css from './BookingModal.module.css';
import { ClockIcon, CloseIcon } from 'assets/sprite';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal } from '../../redux/modal/modal.reducer';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookingModalSchema } from 'utils/modalSchemes';
import options from '../../data/formTime';
import { formStyles } from './formStyles';
import Select from 'react-select';
import { components } from 'react-select';
import { SelectModalData } from '../../redux/modal/modal.selectors';

export const BookingModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { phone: '+380' },
    resolver: yupResolver(bookingModalSchema),
  });

  const dispatch = useDispatch();
  const data = useSelector(SelectModalData);
  const Heading = ({ children, ...props }) => (
    <components.Menu {...props}>
      <div className="heading">Meeting time</div>
      {children}
    </components.Menu>
  );
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
    console.log(data);
  };
  useEffect(() => {
    window.addEventListener('keydown', closeModalFromEsc);
    return () => {
      window.removeEventListener('keydown', closeModalFromEsc);
    };
    // eslint-disable-next-line
  }, []);

  const timeIcon = () => <ClockIcon />;

  if (!data) {
    return;
  }
  const { avatar_url, name } = data;
  return (
    <div onClick={closeModalFromOverlay} className={css.modal_owerlay}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.close_btn}>
          <CloseIcon />
        </button>

        <h2 className={css.booking_title}>
          Make an appointment with a psychologists
        </h2>
        <p className={css.booking_descr}>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
        <div className={css.doctor_container}>
          <img className={css.avatar} src={avatar_url} alt="psychologist" />
          <div className={css.doctor_name_container}>
            <p className={css.role}>Your psychologists</p>
            <h3 className={css.doctor_name}>{name}</h3>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handlerSubmit)}
          className={css.booking_form}
        >
          <label className={css.name_label}>
            <input
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

          <div className={css.phone_meeting_time_label}>
            <div className={css.phone_label}>
              <input
                className={css.phone_field}
                type="text"
                style={{
                  borderColor: errors.phone ? 'red' : 'rgba(25, 26, 21, 0.1)',
                }}
                {...register('phone')}
              />
              {errors.phone && (
                <p className={css.error_title}>{errors.phone.message}</p>
              )}
            </div>

            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  defaultValue={{ label: '00 : 00', value: '00:00' }}
                  options={options}
                  // menuIsOpen
                  styles={formStyles}
                  components={{ DropdownIndicator: timeIcon, Menu: Heading }}
                />
              )}
            />
          </div>

          <label className={css.email_label}>
            <input
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

          <label className={css.comment_label}>
            <textarea
              {...register('comment')}
              placeholder="Comment"
              className={css.comment_field}
            ></textarea>
          </label>

          <button className={css.submit_form_btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

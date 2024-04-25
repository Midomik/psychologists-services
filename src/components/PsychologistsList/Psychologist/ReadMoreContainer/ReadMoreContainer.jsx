import React from 'react';
import css from './ReadMoreContainer.module.css';
import { nanoid } from 'nanoid';
import { StarIcon } from 'assets/sprite';
import {
  setModalData,
  setOpenBookingModal,
} from '../../../../redux/modal/modal.reducer';
import { useDispatch } from 'react-redux';

export const ReadMoreContainer = ({ reviews, data }) => {
  const dispatch = useDispatch();
  const handlerBtn = () => {
    dispatch(setModalData(data));
    dispatch(setOpenBookingModal());
  };
  return (
    <div className={css.more_data_container}>
      {reviews.map(review => {
        const { reviewer, rating, comment } = review;
        return (
          <div className={css.review_container} key={nanoid()}>
            <div className={css.avatar_name_rating_container}>
              <p className={css.avatar_letter}>{reviewer[0]}</p>

              <div className={css.name_rating_container}>
                <h3 className={css.name}>{reviewer}</h3>
                <div className={css.star_rating_container}>
                  <StarIcon />
                  <p className={css.rating}>{rating}</p>
                </div>
              </div>
            </div>

            <p className={css.descr}>{comment}</p>
          </div>
        );
      })}
      <button onClick={handlerBtn} className={css.make_an_appointment_btn}>
        Make an appointment
      </button>
    </div>
  );
};

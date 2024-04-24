import React from 'react';
import css from './Psychologist.module.css';
import {
  FavoriteIcon,
  StarIcon,
  StatusIcon,
  VerticalLineIcon,
} from 'assets/sprite';
import { useState } from 'react';

import { ReadMoreContainer } from './ReadMoreContainer/ReadMoreContainer';

export const Psychologist = ({ data }) => {
  const {
    name,
    avatar_url,
    experience,
    reviews,
    price_per_hour,
    rating,
    license,
    specialization,
    initial_consultation,
    about,
  } = data;
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <li className={css.psychologist_container}>
      <div className={css.avatar_border}>
        <div className={css.avatar_container}>
          <img className={css.avatar} src={avatar_url} alt={name} />
          <div className={css.status_icon}>
            <StatusIcon />
          </div>
        </div>
      </div>

      <div className={css.data_container}>
        <div className={css.introduce_container}>
          <p className={css.role}>Psychologist</p>
          <h2 className={css.name}>{name}</h2>
        </div>

        <div className={css.skills_container}>
          <div className={css.experience_license_container}>
            <p className={css.experiance}>
              Experiance: <span className={css.skill_span}>{experience}</span>
            </p>
            <p className={css.license}>
              License:<span className={css.skill_span}> {license}</span>
            </p>
          </div>

          <div className={css.specilization_initial_consultation_container}>
            <p className={css.specialization}>
              Specialization:{' '}
              <span className={css.skill_span}>{specialization}</span>
            </p>
            <p className={css.initial_consultation}>
              Initial_consultation:{' '}
              <span className={css.skill_span}>{initial_consultation}</span>
            </p>
          </div>
        </div>

        <div className={css.descr_doctor_container}>
          <p className={css.descr_doctor}>{about}</p>
        </div>

        <div className={css.rating_container}>
          <div className={css.rating_price_per_hour_container}>
            <p className={css.rating}>
              <StarIcon /> Rating:{rating}
            </p>
            <VerticalLineIcon />
            <p className={css.price_per_hour}>
              Price / 1 hour:{' '}
              <span className={css.rating_span}>{price_per_hour}</span>
            </p>
          </div>
          <FavoriteIcon isFavorite={false} />
        </div>

        {!isReadMore && (
          <button
            onClick={() => setIsReadMore(true)}
            className={css.read_more_btn}
          >
            Read more
          </button>
        )}
        {isReadMore && <ReadMoreContainer reviews={reviews} />}
      </div>
    </li>
  );
};

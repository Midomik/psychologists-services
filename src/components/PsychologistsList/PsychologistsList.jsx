import React from 'react';
import css from './PsychologistsList.module.css';
import { Psychologist } from './Psychologist/Psychologist';
import { nanoid } from 'nanoid';
import { selectFavorites } from '../../redux/psychologists/psychologists.selectors';
import { useSelector } from 'react-redux';

export const PsychologistsList = ({ doctors }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <ul className={css.psychologists_list_container}>
      {doctors.map(doctor => {
        const isFavorite = favorites.includes(doctor.uid);
        
        return (
          <Psychologist key={nanoid()} isFavorite={isFavorite} data={doctor} />
        );
      })}
    </ul>
  );
};

import React from 'react';
import css from './PsychologistsList.module.css';
import { Psychologist } from './Psychologist/Psychologist';
import { nanoid } from 'nanoid';

export const PsychologistsList = ({ doctors }) => {
  return (
    <ul className={css.psychologists_list_container}>
      {doctors.map(doctor => (
        <Psychologist key={nanoid()} data={doctor} />
      ))}
    </ul>
  );
};

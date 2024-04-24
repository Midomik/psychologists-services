import React from 'react';
import css from './PsychologistsList.module.css';
import { Psychologist } from './Psychologist/Psychologist';

export const PsychologistsList = ({ doctors }) => {
  return (
    <ul className={css.psychologists_list_container}>
      {doctors.map(doctor => (
        <Psychologist key={doctor.id} data={doctor} />
      ))}
    </ul>
  );
};

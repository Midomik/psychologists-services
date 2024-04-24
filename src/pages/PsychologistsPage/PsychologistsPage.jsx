import Filter from 'components/Filter/Filter';
import css from './PsychologistsPage.module.css';
import { selectDoctors } from '../../redux/psychologists/psychologists.selectors';
import { useSelector } from 'react-redux';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';

export const PsychologistsPage = () => {
  const doctors = useSelector(selectDoctors);
  return (
    <div className={`container ${css.psychologists_container}`}>
      <Filter />
      <PsychologistsList doctors={doctors} />
    </div>
  );
};

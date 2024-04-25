import Filter from 'components/Filter/Filter';
import css from './PsychologistsPage.module.css';
import { selectDoctors } from '../../redux/psychologists/psychologists.selectors';
import { useSelector } from 'react-redux';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';

import { selectIsOpenBookingModal } from '../../redux/modal/modal.selectors';
import { BookingModal } from 'components/BookingModal/BookingModal';

export const PsychologistsPage = () => {
  const doctors = useSelector(selectDoctors);
  const isOpenBookingModal = useSelector(selectIsOpenBookingModal);
  return (
    <div className={`container ${css.psychologists_container}`}>
      <Filter />
      <PsychologistsList doctors={doctors} />
      {isOpenBookingModal && <BookingModal />}
    </div>
  );
};

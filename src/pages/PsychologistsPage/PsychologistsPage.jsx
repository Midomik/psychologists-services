import Filter from 'components/Filter/Filter';
import css from './PsychologistsPage.module.css';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import {
  ref,
  query,
  onValue,
  orderByKey,
  startAfter,
  limitToFirst,
} from 'firebase/database';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/auth/auth.selectors';
import { Loader } from 'components/Loader/Loader';

export const PsychologistsPage = () => {
  const [data, setData] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [isAll, setIsAll] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, [isAuth]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const dbRef = ref(db, 'doctors/');

      let qr;
      if (lastKey) {
        qr = query(dbRef, orderByKey(), startAfter(lastKey), limitToFirst(4));
      } else {
        qr = query(dbRef, orderByKey(), limitToFirst(4));
      }

      onValue(qr, snapshot => {
        const newData = [];
        let newLastKey = null;

        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          newData.push({ id: childKey, ...childData });
          newLastKey = childKey;
        });

        setData([...data, ...newData]);
        setLastKey(newLastKey);
        if (newData.length < 4) {
          setIsAll(true);
        }
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className={`container ${css.psychologists_container}`}>
      {isLoading && <Loader />}
      {data.length !== 0 && <Filter />}
      {data.length > 0 && <PsychologistsList doctors={data} />}
      {!isAll && data.length !== 0 && (
        <button onClick={() => loadData()} className={css.load_more_btn}>
          Load more
        </button>
      )}
    </div>
  );
};

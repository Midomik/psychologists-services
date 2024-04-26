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

export const PsychologistsPage = () => {
  const [data, setData] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [isAll, setIsAll] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const dbRef = ref(db);

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`container ${css.psychologists_container}`}>
      <Filter />
      {data.length > 0 && <PsychologistsList doctors={data} />}
      {!isAll && (
        <button onClick={() => loadData()} className={css.load_more_btn}>
          Load more
        </button>
      )}
    </div>
  );
};

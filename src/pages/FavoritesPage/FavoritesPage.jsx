import Filter from 'components/Filter/Filter';
import css from './FavoritesPage.module.css';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';
import { useEffect, useState } from 'react';

import { getAuth } from 'firebase/auth';
import { onValue, orderByKey, query, ref } from 'firebase/database';
import { db } from '../../firebase';
import { Loader } from 'components/Loader/Loader';

export const FavoritesPage = () => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  const [doctors, setDoctors] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isAll, setIsAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const perPage = 4;

  const loadData = async () => {
    try {
      setIsLoading(true);
      const dbRef = ref(db, 'doctors/');
      const qr = query(dbRef, orderByKey());

      onValue(qr, snapshot => {
        const newData = [];

        snapshot.forEach(childSnapshot => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          newData.push({ id: childKey, ...childData });
        });

        setDoctors(newData);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (doctors.length > 0) {
      const filteredData = doctors.filter(item =>
        Object.keys(item.favoritedBy).includes(userId)
      );
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedData = filteredData.slice(startIndex, endIndex);
      setData(prevState => [...prevState, ...paginatedData]);
      setIsAll(filteredData.length - perPage <= data.length);
    }
    //eslint-disable-next-line
  }, [doctors, userId, page]);
  console.log(isAll);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={`container ${css.favorites_container}`}>
      {isLoading && <Loader />}
      <Filter />
      {true && <PsychologistsList doctors={data} />}
      {!isAll && (
        <button onClick={() => loadMore()} className={css.load_more_btn}>
          Load more
        </button>
      )}
    </div>
  );
};

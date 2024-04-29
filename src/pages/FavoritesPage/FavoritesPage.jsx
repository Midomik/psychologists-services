import css from './FavoritesPage.module.css';
import { PsychologistsList } from 'components/PsychologistsList/PsychologistsList';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/psychologists/psychologists.selectors';

export const FavoritesPage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 4;
  const favoriteList = useSelector(selectFavorites);

  const loadMore = () => {
    setPageIndex(prevIndex => prevIndex + 1);
  };

  const displayedFavorites = favoriteList.slice(0, (pageIndex + 1) * pageSize);
  return (
    <div className={`container ${css.favorites_container}`}>
      {favoriteList.length === 0 && (
        <h3 className={css.no_favoritees}>
          You don't have favorite psychologists yet
        </h3>
      )}

      {true && <PsychologistsList doctors={displayedFavorites} />}

      {favoriteList.length > displayedFavorites.length && (
        <button onClick={() => loadMore()} className={css.load_more_btn}>
          Load more
        </button>
      )}
    </div>
  );
};

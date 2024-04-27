import { SharedLayout } from 'layout/SharedLayout';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { PsychologistsPage } from 'pages/PsychologistsPage/PsychologistsPage';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';

export const Router = () => {
  return (
    <BrowserRouter basename="/psychologists-services">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="psychologists" element={<PsychologistsPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

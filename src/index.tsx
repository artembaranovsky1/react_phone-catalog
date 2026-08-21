import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Navigate, Route, HashRouter, Routes } from 'react-router-dom';
import HomePage from './modules/HomePage/HomePage';
import PhonesPage from './modules/PhonesPage/PhonesPage';
import TablesPage from './modules/TablesPage/TablesPage';
import DetailsPage from './modules/DetailsPage/DetailsPage';
import { AccessoriesPage } from './modules/AccessoriesPage/AccessoriesPage';
import { NotFoundPage } from './modules/NotFoundPage/NotFoundPage';
import CartPage from './modules/CartPage/CartPage';
import FavoritesPage from './modules/FavoritesPage/FavoritesPage';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route index element={<HomePage />} />

        <Route path="phones">
          <Route index element={<PhonesPage />} />
          <Route path=":productId" element={<DetailsPage />} />
        </Route>

        <Route path="tablets">
          <Route index element={<TablesPage />} />
          <Route path=":productId" element={<DetailsPage />} />
        </Route>

        <Route path="accessories">
          <Route index element={<AccessoriesPage />} />
          <Route path=":productId" element={<DetailsPage />} />
        </Route>

        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>,
);

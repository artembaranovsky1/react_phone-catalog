import './FavoritesPage.scss';
import { Product } from '../../types/Product';
import ProductCard from '../../shared/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import { BarNavigation } from '../PhonesPage/components/BarNavigation/BarNavigation';

export const FavoritesPage = () => {
  const [favorite, setFavorite] = useState([]);

  const refreshCounts = () => {
    const favorites = JSON.parse(localStorage.getItem('FavoriteStore') || '[]');

    setFavorite(favorites);
  };

  useEffect(() => {
    refreshCounts();
    window.addEventListener('favUpdated', refreshCounts);

    window.addEventListener('storage', refreshCounts);

    return () => {
      window.removeEventListener('favUpdated', refreshCounts);
      window.removeEventListener('storage', refreshCounts);
    };
  }, []);

  return (
    <div className="content">
      <BarNavigation nameCategory="Favorites" />
      <p className="text-h1">Favourites</p>
      <p className="text-body secondary">{favorite.length} items</p>

      <div className="favorite__list">
        <div className="favorite__list">
          {favorite.map((product: Product, index: number) => (
            <div className="favorite__product-card" key={index}>
              <ProductCard key={product.id} currentProduct={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;

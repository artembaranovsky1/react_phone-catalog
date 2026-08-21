import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const [favCount, setFavCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const refreshCounts = () => {
    const favorites = JSON.parse(localStorage.getItem('FavoriteStore') || '[]');
    const cart = JSON.parse(localStorage.getItem('CartStore') || '[]');

    setFavCount(favorites.length);
    setCartCount(cart.length);
  };

  useEffect(() => {
    refreshCounts();

    window.addEventListener('cartUpdated', refreshCounts);
    window.addEventListener('favUpdated', refreshCounts);
    window.addEventListener('delete-update', refreshCounts);

    window.addEventListener('storage', refreshCounts);

    return () => {
      window.removeEventListener('cartUpdated', refreshCounts);
      window.removeEventListener('favUpdated', refreshCounts);
      window.removeEventListener('storage', refreshCounts);
      window.removeEventListener('delete-update', refreshCounts);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__left-container">
          <NavLink className="navbar__logo-button" to={'/'}>
            <img
              className="navbar__logo"
              src="/serviceImg/logo.svg"
              alt="logo"
            />
          </NavLink>

          <div className="navbar__link">
            {/*<NavLink className="navbar__button" to={'/'}>*/}
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbar__button--active' : 'navbar__button'
              }
              to={'/'}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbar__button--active' : 'navbar__button'
              }
              to={'/phones'}
            >
              Phones
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbar__button--active' : 'navbar__button'
              }
              to={'/tablets'}
            >
              Tablets
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbar__button--active' : 'navbar__button'
              }
              to={'/accessories'}
            >
              Accessories
            </NavLink>
          </div>
        </div>

        <div className="navbar__right-container">
          {favCount === 0 ? (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `navbar__icon navbar__icon--heart-empty
                    navbar__button--active`
                  : `navbar__icon navbar__icon--heart-empty
                    navbar__icon--heart-counter`
              }
              // className="navbar__icon navbar__icon--heart-empty"
              to="/favorites"
            />
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `navbar__icon navbar__icon--heart-empty
                    navbar__button--active`
                  : 'navbar__icon navbar__icon--heart-empty'
              }
              // className="navbar__icon navbar__icon--heart-empty"
              to="/favorites"
            >
              <span className="navbar__icon-counter ">{favCount}</span>
            </NavLink>
          )}

          {cartCount === 0 ? (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `navbar__icon navbar__icon--shopping-bag
                    navbar__button--active`
                  : 'navbar__icon navbar__icon--shopping-bag'
              }
              // className="navbar__icon navbar__icon--shopping-bag"
              to="/cart"
            ></NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `navbar__icon navbar__icon--shopping-bag
                    navbar__button--active`
                  : 'navbar__icon navbar__icon--shopping-bag'
              }
              // className="navbar__icon navbar__icon--shopping-bag"
              to="/cart"
            >
              <span className="navbar__icon-counter">{cartCount}</span>
            </NavLink>
          )}

          {/*<NavLink*/}
          {/*  className="navbar__icon navbar__icon--heart-empty"*/}
          {/*  to="/favorites"*/}
          {/*>*/}
          {/*  <span className="navbar__icon-counter ">{favCount}</span>*/}
          {/*</NavLink>*/}

          {/*<NavLink className="navbar__icon navbar__icon--shopping-bag" to="/cart">*/}
          {/*  <span className="navbar__icon-counter">{cartCount}</span>*/}
          {/*</NavLink>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

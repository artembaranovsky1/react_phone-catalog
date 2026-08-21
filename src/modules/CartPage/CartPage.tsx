import './CartPage.scss';
import { Product } from '../../types/Product';
import { CartCard } from './components/CartCard/CartCard';
import NavToBack from '../../shared/NavToBack/NavToBack';
import { useEffect, useState } from 'react';
import CartAmount from './components/CartAmount/CartAmount';

type CartItem = {
  item: Product;
  quantity: number;
};

export const CartPage = () => {
  const [checkoutActive, setCheckoutActive] = useState<boolean>(false);
  const [cart, setCartState] = useState<CartItem[]>(() => {
    return JSON.parse(localStorage.getItem('CartStore') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('CartStore', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="content">
      <NavToBack />
      <p className="text-h1">Cart</p>

      <div className="cart__content">
        {cart.length === 0 ? (
          <div className="cart__empty">
            <div className="cart__empty-photo"></div>
          </div>
        ) : (
          <>
            <div className="cart__cards">
              {cart.map((product: CartItem, index: number) => (
                <CartCard
                  key={index}
                  product={product}
                  setCartState={setCartState}
                />
              ))}
            </div>
            <div className="cart__amount">
              <CartAmount setCheckoutActive={setCheckoutActive} />
            </div>
          </>
        )}
      </div>

      {checkoutActive ? (
        <div className="cart__message-overlay">
          <div className="cart__message">
            <div className="cart__message-header">
              <p className="text-h3">Cart</p>
              <div
                className="icon--close"
                onClick={() => {
                  setCheckoutActive(false);
                }}
              ></div>
            </div>
            <p className="text-h4">
              Checkout is not implemented yet. Do you want to clear the Cart?
            </p>

            <div className="cart__message-buttons">
              <button
                className={`button cart__message-button
                  cart__message-button--confirm text-button`}
                onClick={() => {
                  setCheckoutActive(false);
                  // setCartState([]);
                }}
              >
                Confirm
              </button>
              <button
                className={`button cart__message-button
                  cart__message-button--cancel text-button`}
                onClick={() => {
                  setCheckoutActive(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartPage;

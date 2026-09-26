import React from 'react';
import ProductIllustration from './ProductIllustration';

export default function CartDrawer({
  isCartOpen,
  setIsCartOpen,
  cart,
  cartTotal,
  cartItemCount,
  onUpdateQuantity,
  onRemoveFromCart,
  onProceedCheckout
}) {
  const formatINR = (val) => `?${val.toLocaleString('en-IN')}`;

  if (!isCartOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <h3>Shopping Cart ({cartItemCount})</h3>
          <button
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
          >
            ?
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty-state">
            <span className="empty-cart-icon">??</span>
            <h4>Your cart is empty</h4>
            <p>Explore our curated tech catalog and add your favorite items.</p>
            <button
              className="hero-btn-primary"
              onClick={() => setIsCartOpen(false)}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-thumb">
                    <ProductIllustration type={item.imageType} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">{formatINR(item.price)}</div>
                    <div className="cart-qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="cart-item-remove"
                        onClick={() => onRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer-footer">
              <div className="free-shipping-bar">
                <span>? You qualify for FREE Express Delivery</span>
              </div>
              <div className="cart-subtotal-row">
                <span>Subtotal</span>
                <span className="cart-subtotal-price">{formatINR(cartTotal)}</span>
              </div>
              <button
                className="cart-checkout-btn"
                onClick={onProceedCheckout}
              >
                Proceed to Checkout ({formatINR(cartTotal)}) ?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

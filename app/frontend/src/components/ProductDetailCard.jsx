import React from 'react';
import ProductIllustration from './ProductIllustration';

export default function ProductDetailCard({ product, onAddToCart }) {
  const formatINR = (val) => `?${val.toLocaleString('en-IN')}`;

  return (
    <div className="product-detail-card">
      <div className="showcase-image-col">
        <ProductIllustration type={product.imageType} large={true} />
      </div>
      <div className="showcase-content-col">
        <h2 className="showcase-title">{product.name}</h2>
        <p className="showcase-desc">{product.description}</p>

        <div className="showcase-price">{formatINR(product.price)}</div>

        <button
          className="showcase-add-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

        <div className="trust-badges-row">
          <span className="trust-badge-item">? Secure payment</span>
          <span className="trust-badge-item">? Fast delivery</span>
          <span className="trust-badge-item">? Easy returns</span>
          <span className="trust-badge-item">? 1-year warranty</span>
        </div>
      </div>
    </div>
  );
}

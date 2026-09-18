import React from 'react';
import ProductIllustration from './ProductIllustration';

export default function ProductCard({
  product,
  onProductClick,
  onAddToCart,
  showInStock = false
}) {
  const formatINR = (val) => `?${val.toLocaleString('en-IN')}`;

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-card-image-wrap">
        <ProductIllustration type={product.imageType} />
        <button
          className="quick-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          title="Add to cart"
        >
          + Add
        </button>
      </div>
      <div className="product-card-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating-row">
          <span className="star-icon">?</span>
          <span className="rating-score">{product.rating}</span>
          <span className="rating-dot">?</span>
          <span className="rating-count">{product.reviewsCount} reviews</span>
          {showInStock && (
            <>
              <span className="rating-dot">?</span>
              <span className="in-stock-badge">In stock</span>
            </>
          )}
        </div>
        <div className="product-price-row">
          <span className="product-price">{formatINR(product.price)}</span>
        </div>
      </div>
    </div>
  );
}

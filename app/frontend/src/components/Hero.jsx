import React from 'react';

export default function Hero({ onShopNow }) {
  return (
    <section className="hero-banner">
      <div className="hero-badge">
        CURATED TECH / VERIFIED PRODUCTS / FAST DELIVERY
      </div>
      <h1 className="hero-title">
        Smart products.<br />Better shopping.
      </h1>
      <p className="hero-subtitle">
        Technology for everyday life, with transparent pricing and a checkout built for confidence.
      </p>
      <div className="hero-actions">
        <button className="hero-btn-primary" onClick={onShopNow}>
          Shop Now ?
        </button>
      </div>
    </section>
  );
}

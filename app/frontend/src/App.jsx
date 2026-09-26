import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductCard from './components/ProductCard';
import ProductDetailCard from './components/ProductDetailCard';
import CheckoutFlow from './components/CheckoutFlow';
import CartDrawer from './components/CartDrawer';
import { INITIAL_PRODUCTS } from './data/mockData';
import './App.css';

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'category', 'checkout'
  const [selectedProduct, setSelectedProduct] = useState(INITIAL_PRODUCTS[0]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Cart State (Initialized with 2 items to match Figma Cart (2))
  const [cart, setCart] = useState([
    { ...INITIAL_PRODUCTS[0], quantity: 1 },
    { ...INITIAL_PRODUCTS[1], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter States
  const [priceFilter, setPriceFilter] = useState('all');
  const [brandFilters, setBrandFilters] = useState({ Nova: true, Pulse: true, Arc: true });
  const [ratingFilter, setRatingFilter] = useState({ fourPlus: false, threePlus: false });

  // Checkout State
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState({
    email: 'user@sentinelcart.com',
    phone: '+91 98765 43210',
    name: 'Rahul Sharma',
    address: 'Flat 402, Skyline Residency, Indiranagar',
    city: 'Bengaluru',
    postalCode: '560038',
    paymentMethod: 'upi',
    upiId: 'rahul@okhdfcbank'
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const merged = data.map((item, idx) => {
            const fallback = INITIAL_PRODUCTS[idx % INITIAL_PRODUCTS.length];
            return {
              ...fallback,
              ...item,
              specs: item.specs || fallback.specs,
              highlights: item.highlights || fallback.highlights,
              imageType: item.imageType || fallback.imageType
            };
          });
          setProducts(merged);
        }
      })
      .catch(() => { });
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to cart`);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const cartItemCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory !== 'All' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = product.name.toLowerCase().includes(q) ||
          product.brand.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (priceFilter === 'under-5000' && product.price >= 5000) return false;
      if (priceFilter === '5000-10000' && (product.price < 5000 || product.price > 10000)) return false;
      if (priceFilter === '10000-plus' && product.price <= 10000) return false;

      const activeBrands = Object.keys(brandFilters).filter((b) => brandFilters[b]);
      if (activeBrands.length > 0 && !activeBrands.includes(product.brand)) {
        return false;
      }

      if (ratingFilter.fourPlus && product.rating < 4.0) return false;
      if (ratingFilter.threePlus && product.rating < 3.0) return false;

      return true;
    });
  }, [products, selectedCategory, searchQuery, priceFilter, brandFilters, ratingFilter]);

  const featuredProducts = useMemo(() => {
    return products.filter((p) => p.featured || [1, 2, 3, 4].includes(p.id));
  }, [products]);

  const navigateToCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveTab('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <span className="toast-icon">?</span>
          <span>{toastMessage}</span>
          <button className="toast-action" onClick={() => setIsCartOpen(true)}>
            View Cart
          </button>
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItemCount}
        setIsCartOpen={setIsCartOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        showToast={showToast}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {activeTab === 'home' && (
          <div className="view-home">
            <Hero onShopNow={() => navigateToCategory('Audio')} />
            <CategoryGrid onSelectCategory={navigateToCategory} />

            {/* Featured Today Section */}
            <section className="section-featured">
              <div className="section-header-row">
                <h2 className="section-heading">Featured today</h2>
                <button
                  className="view-all-link"
                  onClick={() => navigateToCategory('All')}
                >
                  View all products ?
                </button>
              </div>

              <div className="product-grid-four">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={openProductModal}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </section>

            {/* Checkout Flow Section */}
            <section className="section-checkout-flow">
              <div className="section-header-row">
                <h2 className="section-heading">Checkout flow</h2>
                <span className="checkout-badge-pill">Frictionless 5-Step Experience</span>
              </div>

              <div className="flow-steps-stack">
                <div
                  className="flow-step-card"
                  onClick={() => { setActiveTab('checkout'); setCheckoutStep(1); }}
                >
                  <div className="step-num">01</div>
                  <div className="step-text">
                    <span className="step-label">Contact</span>
                    <span className="step-sep">?</span>
                    <span className="step-desc">Email + phone</span>
                  </div>
                  <span className="step-arrow">?</span>
                </div>

                <div
                  className="flow-step-card"
                  onClick={() => { setActiveTab('checkout'); setCheckoutStep(2); }}
                >
                  <div className="step-num">02</div>
                  <div className="step-text">
                    <span className="step-label">Shipping</span>
                    <span className="step-sep">?</span>
                    <span className="step-desc">Address + delivery</span>
                  </div>
                  <span className="step-arrow">?</span>
                </div>

                <div
                  className="flow-step-card"
                  onClick={() => { setActiveTab('checkout'); setCheckoutStep(3); }}
                >
                  <div className="step-num">03</div>
                  <div className="step-text">
                    <span className="step-label">Payment</span>
                    <span className="step-sep">?</span>
                    <span className="step-desc">UPI / Card / Wallet</span>
                  </div>
                  <span className="step-arrow">?</span>
                </div>

                <div
                  className="flow-step-card"
                  onClick={() => { setActiveTab('checkout'); setCheckoutStep(4); }}
                >
                  <div className="step-num">04</div>
                  <div className="step-text">
                    <span className="step-label">Review</span>
                    <span className="step-sep">?</span>
                    <span className="step-desc">Order summary</span>
                  </div>
                  <span className="step-arrow">?</span>
                </div>

                <div
                  className="flow-step-card"
                  onClick={() => { setActiveTab('checkout'); setCheckoutStep(5); }}
                >
                  <div className="step-num">05</div>
                  <div className="step-text">
                    <span className="step-label">Confirmed</span>
                    <span className="step-sep">?</span>
                    <span className="step-desc">Track your order</span>
                  </div>
                  <span className="step-arrow">?</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'category' && (
          <div className="view-category">
            <div className="category-header">
              <div className="breadcrumbs">
                <span onClick={() => { setActiveTab('home'); setSelectedCategory('All'); }}>Home</span>
                <span>/</span>
                <span>{selectedCategory === 'All' ? 'All Products' : `${selectedCategory}`}</span>
              </div>
              <h1 className="category-title">
                {selectedCategory === 'All' ? 'Audio & Headphones' : `${selectedCategory}`}
              </h1>
              <p className="category-subtitle">
                {filteredProducts.length} products ? Curated for you
              </p>
            </div>

            <div className="category-layout">
              {/* Left Filters Sidebar */}
              <aside className="filters-sidebar">
                <div className="filters-header">
                  <h3>Filters</h3>
                  {(priceFilter !== 'all' || !brandFilters.Nova || !brandFilters.Pulse || !brandFilters.Arc || ratingFilter.fourPlus || ratingFilter.threePlus) && (
                    <button
                      className="reset-filters-btn"
                      onClick={() => {
                        setPriceFilter('all');
                        setBrandFilters({ Nova: true, Pulse: true, Arc: true });
                        setRatingFilter({ fourPlus: false, threePlus: false });
                      }}
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Price</h4>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === 'all'}
                      onChange={() => setPriceFilter('all')}
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === 'under-5000'}
                      onChange={() => setPriceFilter('under-5000')}
                    />
                    <span>Under ?5,000</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === '5000-10000'}
                      onChange={() => setPriceFilter('5000-10000')}
                    />
                    <span>?5,000 ? ?10,000</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === '10000-plus'}
                      onChange={() => setPriceFilter('10000-plus')}
                    />
                    <span>?10,000+</span>
                  </label>
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Brand</h4>
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={brandFilters.Nova}
                      onChange={(e) =>
                        setBrandFilters((prev) => ({ ...prev, Nova: e.target.checked }))
                      }
                    />
                    <span>Nova</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={brandFilters.Pulse}
                      onChange={(e) =>
                        setBrandFilters((prev) => ({ ...prev, Pulse: e.target.checked }))
                      }
                    />
                    <span>Pulse</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={brandFilters.Arc}
                      onChange={(e) =>
                        setBrandFilters((prev) => ({ ...prev, Arc: e.target.checked }))
                      }
                    />
                    <span>Arc</span>
                  </label>
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Rating</h4>
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={ratingFilter.fourPlus}
                      onChange={(e) =>
                        setRatingFilter((prev) => ({ ...prev, fourPlus: e.target.checked }))
                      }
                    />
                    <span>4? & above</span>
                  </label>
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={ratingFilter.threePlus}
                      onChange={(e) =>
                        setRatingFilter((prev) => ({ ...prev, threePlus: e.target.checked }))
                      }
                    />
                    <span>3? & above</span>
                  </label>
                </div>
              </aside>

              {/* Right Product Grid */}
              <div className="category-product-listing">
                {filteredProducts.length === 0 ? (
                  <div className="empty-results-box">
                    <h3>No products found</h3>
                    <p>Try adjusting your search criteria or filters</p>
                  </div>
                ) : (
                  <div className="product-grid-three">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onProductClick={openProductModal}
                        onAddToCart={handleAddToCart}
                        showInStock={true}
                      />
                    ))}
                  </div>
                )}

                {/* Product Detail Card below */}
                <div style={{ marginTop: '48px' }}>
                  <ProductDetailCard
                    product={INITIAL_PRODUCTS[0]}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'checkout' && (
          <CheckoutFlow
            checkoutStep={checkoutStep}
            setCheckoutStep={setCheckoutStep}
            checkoutData={checkoutData}
            setCheckoutData={setCheckoutData}
            cart={cart}
            cartTotal={cartTotal}
            orderConfirmed={orderConfirmed}
            setOrderConfirmed={setOrderConfirmed}
            showToast={showToast}
            setActiveTab={setActiveTab}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      {isProductModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={() => setIsProductModalOpen(false)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsProductModalOpen(false)}
            >
              ?
            </button>
            <ProductDetailCard
              product={selectedProduct}
              onAddToCart={(p) => {
                handleAddToCart(p);
                setIsProductModalOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* Flyout Cart Drawer */}
      <CartDrawer
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        cartTotal={cartTotal}
        cartItemCount={cartItemCount}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setActiveTab('checkout');
        }}
      />

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col brand-col">
            <div className="brand-logo footer-logo">SENTINELCART</div>
            <p className="footer-tagline">
              Curated tech, verified authentic products, and frictionless checkout built for confidence.
            </p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <span onClick={() => navigateToCategory('Smartphones')}>Smartphones</span>
            <span onClick={() => navigateToCategory('Laptops')}>Laptops</span>
            <span onClick={() => navigateToCategory('Audio')}>Audio & Headphones</span>
            <span onClick={() => navigateToCategory('Wearables')}>Wearables</span>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <span>Order Tracking</span>
            <span>Warranty & Service</span>
            <span>Returns & Refunds</span>
            <span>Contact Helpdesk</span>
          </div>
          <div className="footer-col">
            <h4>Security & Trust</h4>
            <span>100% Encrypted Payments</span>
            <span>Verified Genuine Products</span>
            <span>Fast Express Dispatch</span>
            <span>ISO 27001 Certified Security</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>? 2026 SentinelCart. All rights reserved.</span>
          <span>Designed with precision & performance.</span>
        </div>
      </footer>
    </div>
  );
}

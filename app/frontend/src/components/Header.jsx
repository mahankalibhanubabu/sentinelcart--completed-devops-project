import React from 'react';

export default function Header({
  activeTab,
  setActiveTab,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  cartItemCount,
  setIsCartOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
  showToast
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            ?
          </button>
          <div
            className="brand-logo"
            onClick={() => {
              setActiveTab('home');
              setSelectedCategory('All');
              setSearchQuery('');
            }}
          >
            SENTINELCART
          </div>
        </div>

        <div className="search-bar-container">
          <span className="search-icon">??</span>
          <input
            type="text"
            placeholder="Search products, brands and categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value && activeTab !== 'category') {
                setActiveTab('category');
              }
            }}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ?
            </button>
          )}
        </div>

        <nav className="header-nav">
          <button
            className={`nav-link ${activeTab === 'category' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('category');
              setSelectedCategory('Audio');
            }}
          >
            Categories
          </button>
          <button
            className="nav-link"
            onClick={() => showToast('Signed in as admin-bhanu')}
          >
            Account
          </button>
          <button
            className={`nav-link ${activeTab === 'checkout' ? 'active' : ''}`}
            onClick={() => setActiveTab('checkout')}
          >
            Orders
          </button>
          <button
            className="nav-cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            Cart ({cartItemCount})
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <button
            className="mobile-nav-item"
            onClick={() => {
              setActiveTab('home');
              setSelectedCategory('All');
              setMobileMenuOpen(false);
            }}
          >
            ?? Home
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => {
              setActiveTab('category');
              setSelectedCategory('Audio');
              setMobileMenuOpen(false);
            }}
          >
            ?? Audio & Headphones
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => {
              setActiveTab('category');
              setSelectedCategory('Smartphones');
              setMobileMenuOpen(false);
            }}
          >
            ?? Smartphones
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => {
              setActiveTab('category');
              setSelectedCategory('Laptops');
              setMobileMenuOpen(false);
            }}
          >
            ?? Laptops
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => {
              setActiveTab('checkout');
              setMobileMenuOpen(false);
            }}
          >
            ?? Checkout Flow
          </button>
          <button
            className="mobile-nav-item"
            onClick={() => {
              setIsCartOpen(true);
              setMobileMenuOpen(false);
            }}
          >
            ?? View Cart ({cartItemCount})
          </button>
        </div>
      )}
    </header>
  );
}

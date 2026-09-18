import React from 'react';

export default function CheckoutFlow({
  checkoutStep,
  setCheckoutStep,
  checkoutData,
  setCheckoutData,
  cart,
  cartTotal,
  orderConfirmed,
  setOrderConfirmed,
  showToast,
  setActiveTab
}) {
  const formatINR = (val) => `?${val.toLocaleString('en-IN')}`;

  return (
    <div className="view-checkout">
      <div className="checkout-page-header">
        <h1 className="section-heading">Checkout flow</h1>
        <p className="checkout-header-sub">
          Secure & encrypted checkout experience
        </p>
      </div>

      <div className="checkout-layout">
        {/* Stepper Navigator */}
        <div className="checkout-stepper-panel">
          <div
            className={`checkout-step-nav-card ${checkoutStep === 1 ? 'current' : checkoutStep > 1 ? 'completed' : ''}`}
            onClick={() => setCheckoutStep(1)}
          >
            <div className="step-num">01</div>
            <div className="step-nav-info">
              <div className="step-nav-title">Contact</div>
              <div className="step-nav-detail">
                {checkoutData.email} ? {checkoutData.phone}
              </div>
            </div>
            <span className="step-status-icon">{checkoutStep > 1 ? '?' : '?'}</span>
          </div>

          <div
            className={`checkout-step-nav-card ${checkoutStep === 2 ? 'current' : checkoutStep > 2 ? 'completed' : ''}`}
            onClick={() => setCheckoutStep(2)}
          >
            <div className="step-num">02</div>
            <div className="step-nav-info">
              <div className="step-nav-title">Shipping</div>
              <div className="step-nav-detail">
                {checkoutData.address || 'Address + delivery'}
              </div>
            </div>
            <span className="step-status-icon">{checkoutStep > 2 ? '?' : '?'}</span>
          </div>

          <div
            className={`checkout-step-nav-card ${checkoutStep === 3 ? 'current' : checkoutStep > 3 ? 'completed' : ''}`}
            onClick={() => setCheckoutStep(3)}
          >
            <div className="step-num">03</div>
            <div className="step-nav-info">
              <div className="step-nav-title">Payment</div>
              <div className="step-nav-detail">
                {checkoutData.paymentMethod.toUpperCase()} / Card / Wallet
              </div>
            </div>
            <span className="step-status-icon">{checkoutStep > 3 ? '?' : '?'}</span>
          </div>

          <div
            className={`checkout-step-nav-card ${checkoutStep === 4 ? 'current' : checkoutStep > 4 ? 'completed' : ''}`}
            onClick={() => setCheckoutStep(4)}
          >
            <div className="step-num">04</div>
            <div className="step-nav-info">
              <div className="step-nav-title">Review</div>
              <div className="step-nav-detail">Order summary & verification</div>
            </div>
            <span className="step-status-icon">{checkoutStep > 4 ? '?' : '?'}</span>
          </div>

          <div
            className={`checkout-step-nav-card ${checkoutStep === 5 ? 'current' : ''}`}
            onClick={() => setCheckoutStep(5)}
          >
            <div className="step-num">05</div>
            <div className="step-nav-info">
              <div className="step-nav-title">Confirmed</div>
              <div className="step-nav-detail">Track your order</div>
            </div>
            <span className="step-status-icon">{orderConfirmed ? '?' : '?'}</span>
          </div>
        </div>

        {/* Active Step Form */}
        <div className="checkout-active-form-card">
          {checkoutStep === 1 && (
            <div className="step-form-content">
              <h3>01 Contact Information</h3>
              <p className="form-subtext">Enter your contact details for order tracking and receipts.</p>
              <div className="form-grid">
                <div className="form-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={checkoutData.email}
                    onChange={(e) =>
                      setCheckoutData({ ...checkoutData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={checkoutData.phone}
                    onChange={(e) =>
                      setCheckoutData({ ...checkoutData, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div className="step-actions">
                <button className="step-next-btn" onClick={() => setCheckoutStep(2)}>
                  Continue to Shipping ?
                </button>
              </div>
            </div>
          )}

          {checkoutStep === 2 && (
            <div className="step-form-content">
              <h3>02 Shipping Details</h3>
              <p className="form-subtext">Where should we deliver your order?</p>
              <div className="form-grid">
                <div className="form-field full-width">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={checkoutData.name}
                    onChange={(e) =>
                      setCheckoutData({ ...checkoutData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-field full-width">
                  <label>Street Address</label>
                  <input
                    type="text"
                    value={checkoutData.address}
                    onChange={(e) =>
                      setCheckoutData({ ...checkoutData, address: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label>City</label>
                  <input
                    type="text"
                    value={checkoutData.city}
                    onChange={(e) =>
                      setCheckoutData({ ...checkoutData, city: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label>PIN Code</label>
                  <input
                    type="text"
                    value={checkoutData.postalCode}
                    onChange={(e) =>
                      setCheckoutData({ ...checkoutData, postalCode: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="step-actions">
                <button className="step-back-btn" onClick={() => setCheckoutStep(1)}>
                  ? Back
                </button>
                <button className="step-next-btn" onClick={() => setCheckoutStep(3)}>
                  Continue to Payment ?
                </button>
              </div>
            </div>
          )}

          {checkoutStep === 3 && (
            <div className="step-form-content">
              <h3>03 Payment Method</h3>
              <p className="form-subtext">Choose your preferred payment method.</p>
              <div className="payment-options-grid">
                <label className={`payment-option-card ${checkoutData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={checkoutData.paymentMethod === 'upi'}
                    onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'upi' })}
                  />
                  <div className="option-details">
                    <span className="option-title">UPI Instant Pay (GPay / PhonePe)</span>
                    <span className="option-sub">0% fee ? Instant verification</span>
                  </div>
                </label>

                <label className={`payment-option-card ${checkoutData.paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={checkoutData.paymentMethod === 'card'}
                    onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'card' })}
                  />
                  <div className="option-details">
                    <span className="option-title">Credit / Debit Card</span>
                    <span className="option-sub">Visa, Mastercard, RuPay</span>
                  </div>
                </label>

                <label className={`payment-option-card ${checkoutData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={checkoutData.paymentMethod === 'cod'}
                    onChange={() => setCheckoutData({ ...checkoutData, paymentMethod: 'cod' })}
                  />
                  <div className="option-details">
                    <span className="option-title">Cash on Delivery</span>
                    <span className="option-sub">Pay at doorstep</span>
                  </div>
                </label>
              </div>

              {checkoutData.paymentMethod === 'upi' && (
                <div className="form-field" style={{ marginTop: '16px' }}>
                  <label>UPI ID (VPA)</label>
                  <input
                    type="text"
                    value={checkoutData.upiId}
                    onChange={(e) => setCheckoutData({ ...checkoutData, upiId: e.target.value })}
                    placeholder="username@bank"
                  />
                </div>
              )}

              <div className="step-actions">
                <button className="step-back-btn" onClick={() => setCheckoutStep(2)}>
                  ? Back
                </button>
                <button className="step-next-btn" onClick={() => setCheckoutStep(4)}>
                  Review Order ?
                </button>
              </div>
            </div>
          )}

          {checkoutStep === 4 && (
            <div className="step-form-content">
              <h3>04 Order Summary Review</h3>
              <p className="form-subtext">Please review your items and details before finalizing.</p>

              <div className="review-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="review-item-row">
                    <div className="review-item-info">
                      <span className="review-item-name">{item.name}</span>
                      <span className="review-item-qty">Qty: {item.quantity}</span>
                    </div>
                    <span className="review-item-price">{formatINR(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="order-summary-breakdown">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>{formatINR(cartTotal)}</span>
                </div>
                <div className="summary-line">
                  <span>Express Delivery</span>
                  <span className="free-tag">FREE</span>
                </div>
                <div className="summary-line">
                  <span>Taxes (GST 18% Incl.)</span>
                  <span>?0</span>
                </div>
                <div className="summary-total-line">
                  <span>Total Payable</span>
                  <span>{formatINR(cartTotal)}</span>
                </div>
              </div>

              <div className="step-actions">
                <button className="step-back-btn" onClick={() => setCheckoutStep(3)}>
                  ? Back
                </button>
                <button
                  className="step-place-order-btn"
                  onClick={() => {
                    setOrderConfirmed(true);
                    setCheckoutStep(5);
                    showToast('Order placed successfully!');
                  }}
                >
                  Confirm & Place Order ({formatINR(cartTotal)})
                </button>
              </div>
            </div>
          )}

          {checkoutStep === 5 && (
            <div className="step-form-content order-confirmed-view">
              <div className="confirmed-icon-circle">?</div>
              <h3>Order Confirmed!</h3>
              <p className="order-id-badge">Order ID: #STC-2026-98174</p>
              <p className="confirmed-desc">
                Thank you, {checkoutData.name}! We have received your order and sent a tracking link to {checkoutData.email}.
              </p>

              <div className="delivery-estimate-card">
                <span className="delivery-icon">??</span>
                <div>
                  <strong>Estimated Delivery</strong>
                  <div>Tomorrow, by 8:00 PM ? Fast Express</div>
                </div>
              </div>

              <div className="step-actions" style={{ justifyContent: 'center' }}>
                <button
                  className="step-next-btn"
                  onClick={() => {
                    setActiveTab('home');
                    setCheckoutStep(1);
                  }}
                >
                  Continue Shopping ?
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

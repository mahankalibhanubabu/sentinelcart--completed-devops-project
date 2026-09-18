import React from 'react';

export default function ProductIllustration({ type, large = false }) {
  const sizeClass = large ? 'illustration-large' : 'illustration-standard';
  
  if (type === 'headphones') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#EEF2FF" />
          <path d="M44 86C44 65 60 48 80 48C100 48 116 65 116 86" stroke="#4F46E5" strokeWidth="8" strokeLinecap="round" />
          <rect x="36" y="80" width="16" height="38" rx="8" fill="#4338CA" />
          <rect x="108" y="80" width="16" height="38" rx="8" fill="#4338CA" />
          <path d="M44 98H52" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 98H116" stroke="#818CF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  
  if (type === 'earbuds') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#F0FDF4" />
          <rect x="52" y="52" width="56" height="56" rx="18" fill="#10B981" />
          <circle cx="68" cy="76" r="6" fill="#FFFFFF" />
          <circle cx="92" cy="76" r="6" fill="#FFFFFF" />
          <path d="M68 82V98" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M92 82V98" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === 'gaming-headset') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#FAF5FF" />
          <path d="M42 84C42 62 59 44 80 44C101 44 118 62 118 84" stroke="#9333EA" strokeWidth="8" strokeLinecap="round" />
          <rect x="34" y="80" width="18" height="36" rx="8" fill="#7E22CE" />
          <rect x="108" y="80" width="18" height="36" rx="8" fill="#7E22CE" />
          <path d="M42 108C46 118 58 122 72 118" stroke="#C084FC" strokeWidth="4" strokeLinecap="round" />
          <circle cx="72" cy="118" r="4" fill="#A855F7" />
        </svg>
      </div>
    );
  }

  if (type === 'studio-buds') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#EFF6FF" />
          <ellipse cx="80" cy="80" rx="36" ry="24" fill="#3B82F6" />
          <circle cx="70" cy="76" r="7" fill="#FFFFFF" opacity="0.9" />
          <circle cx="90" cy="76" r="7" fill="#FFFFFF" opacity="0.9" />
          <path d="M72 84C72 88 76 92 80 92C84 92 88 88 88 84" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === 'smartphone') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#F8FAFC" />
          <rect x="56" y="38" width="48" height="84" rx="10" fill="#0F172A" />
          <rect x="60" y="44" width="40" height="72" rx="6" fill="#38BDF8" opacity="0.85" />
          <circle cx="80" cy="42" r="2" fill="#64748B" />
        </svg>
      </div>
    );
  }

  if (type === 'laptop') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#F8FAFC" />
          <rect x="46" y="48" width="68" height="46" rx="4" fill="#334155" />
          <rect x="50" y="52" width="60" height="38" rx="2" fill="#60A5FA" opacity="0.85" />
          <path d="M38 96H122L116 104H44L38 96Z" fill="#64748B" />
        </svg>
      </div>
    );
  }

  if (type === 'smarthome') {
    return (
      <div className={`product-visual-box ${sizeClass}`}>
        <svg viewBox="0 0 160 160" fill="none" className="product-svg">
          <circle cx="80" cy="80" r="70" fill="#FFFBEB" />
          <rect x="54" y="52" width="52" height="56" rx="12" fill="#F59E0B" />
          <circle cx="80" cy="74" r="12" fill="#FFFFFF" />
          <path d="M80 66V82M72 74H88" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`product-visual-box ${sizeClass}`}>
      <svg viewBox="0 0 160 160" fill="none" className="product-svg">
        <circle cx="80" cy="80" r="70" fill="#F3F4F6" />
        <rect x="62" y="50" width="36" height="60" rx="10" fill="#1E293B" />
        <rect x="66" y="58" width="28" height="44" rx="6" fill="#3B82F6" />
        <circle cx="80" cy="80" r="8" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

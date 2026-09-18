import React from 'react';
import { CATEGORIES } from '../data/mockData';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="section-categories">
      <h2 className="section-heading">Shop by category</h2>
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => onSelectCategory(cat.id)}
          >
            <div className="category-icon-circle">
              <span className="category-emoji">{cat.icon}</span>
            </div>
            <span className="category-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

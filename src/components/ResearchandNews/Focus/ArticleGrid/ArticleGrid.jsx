import React from 'react';
import './ArticleGrid.css';

export function ArticleGrid({ children }) {
  return (
    <div className="article-grid">
      {children}
    </div>
  );
}


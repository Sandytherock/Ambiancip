import React from 'react';
import './ArticleLayout.css';

export function ArticleLayout({ children }) {
  return (
    <div className="article-layout">
      {children}
    </div>
  );
}


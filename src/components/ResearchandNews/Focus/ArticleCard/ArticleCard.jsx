import React from 'react';
import './ArticleCard.css';

export function ArticleCard({ image, category, title, isFeature }) {
  return (
    <article className={`article-card ${isFeature ? 'feature' : ''}`}>
      <img src={image} alt="" className="article-image" />
      <div className="article-content">
        <span className="article-category">{category}</span>
        <h2 className="article-title">{title}</h2>
      </div>
    </article>
  );
}


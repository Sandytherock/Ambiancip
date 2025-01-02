'use client'

import { useState } from 'react'

export function ArticleCard({ image, category, title, isFeature }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article 
      style={{
        ...styles.articleCard,
        ...(isFeature ? styles.feature : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img 
          src={image} 
          alt="" 
          style={{
            ...styles.articleImage,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }} 
        />
      </div>
      <div style={styles.articleContent}>
        <span style={styles.articleCategory}>{category}</span>
        <h2 style={{
          ...styles.articleTitle,
          ...(isFeature ? styles.featureTitle : {}),
          textDecoration: isHovered ? 'underline' : 'none',
        }}>{title}</h2>
      </div>
    </article>
  );
}

const styles = {
  articleCard: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e5e5e5',
    overflow: 'hidden',
  },
  imageContainer: {
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  articleContent: {
    padding: '20px',
  },
  articleCategory: {
    color: '#8b0000',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '10px',
    display: 'block',
  },
  articleTitle: {
    color: '#002855',
    fontSize: '1.25rem',
    margin: 0,
    fontFamily: 'serif',
    lineHeight: 1.4,
    transition: 'text-decoration 0.3s ease-in-out',
  },
  featureTitle: {
    fontSize: '1.75rem',
  },
  feature: {
    gridRow: 'span 2',
  },
};


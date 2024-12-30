import React from 'react';
import './GridItem.css';

export function GridItem({ href, children }) {
  return (
    <div className="grid-item-wrapper">
      <a href={href} className="grid-item">
        {children}
      </a>
      <div className="grid-item-border"></div>
    </div>
  );
}


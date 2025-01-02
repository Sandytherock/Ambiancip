import React from 'react';
import './LinkSection.css';

export function LinkSection({ title, description, link }) {
  return (
    <div className="link-section">
      <a href={link} className="link-section-title">
        {title}
      </a>
      <p className="link-section-description">{description}</p>
    </div>
  );
}


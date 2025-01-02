import React, { useState } from 'react';
import './FacilityCard.css';

const FacilityCard = ({ title, description, imageUrl, imageAlt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`facility-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="facility-image">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="facility-content">
        <h2 className="facility-title">{title}</h2>
        <p className="facility-description">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;


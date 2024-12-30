import React from 'react';
import './ImageCard.css';

const ImageCard = ({ image, title, description }) => {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;


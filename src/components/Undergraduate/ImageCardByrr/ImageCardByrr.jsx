import React from 'react';
import './ImageCardByrr.css';

const ImageCardByrr = ({ image, title, description }) => {
  return (
    <div className="image-card-byrr">
      <div className="card-image-byrr">
        <img src={image} alt="Campus life" />
      </div>
      <div className="card-content-byrr">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCardByrr;


import React from 'react';
import './CardForl.css';

function CardForl(props) {
  const titleClass = props.isUnderlined ? 'card-title-forl underlined-forl' : 'card-title-forl';
  
  return (
    <div className="card-forl">
      <div className="card-image-wrapper-forl">
        <img 
          src={props.image} 
          alt={props.title} 
          className="card-image-forl"
        />
      </div>
      <div className="card-body-forl">
        <h2 className={titleClass}>{props.title}</h2>
        <p className="card-text-forl">{props.description}</p>
      </div>
    </div>
  );
}

export default CardForl;


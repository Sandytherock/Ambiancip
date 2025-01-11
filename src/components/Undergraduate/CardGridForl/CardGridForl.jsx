import React from 'react';
import './CardGridForl.css';

function CardGridForl(props) {
  return (
    <div className="card-grid-forl">
      {props.children}
    </div>
  );
}

export default CardGridForl;


import React from 'react';
import './Button.css';

function Button({ children, href }) {
  return (
    <a href={href} className="buttonnews">
      {children}
    </a>
  );
}

export default Button;


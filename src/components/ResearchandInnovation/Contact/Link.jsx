import React from 'react';
import './Link.css'
const Link = ({ href, children }) => (
  <a href={href} className="custom-link">
    {children}
  </a>
);

export default Link;



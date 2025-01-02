import React, { useState } from 'react';
import './Heading.css';

export function Heading() {
  const [isOpen, setIsOpen] = useState(false);

  const topics = [
    'Cancer Research',
    'Innovation',
    'Nanotechnology',
    'Robotics',
    'Artificial Intelligence',
    'Neuroscience'
  ];

  return (
    <header className="headernews">
      <h1 className="header-title">Focus On: Cancer Research</h1>
      <div className="topics-container">
        <button 
          className="topics-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Topics {isOpen ? '▲' : '▼'}
        </button>
        {isOpen && (
          <ul className="topics-dropdown">
            {topics.map((topic, index) => (
              <li key={index} className="topic-item">
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}


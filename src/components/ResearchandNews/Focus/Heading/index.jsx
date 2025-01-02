'use client'

import { useState } from 'react'

export function Header() {
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
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>Focus On: Cancer Research</h1>
      <div style={styles.topicsContainer}>
        <button 
          style={styles.topicsButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          Topics {isOpen ? '▲' : '▼'}
        </button>
        {isOpen && (
          <ul style={styles.topicsDropdown}>
            {topics.map((topic, index) => (
              <li key={index} style={styles.topicItem}>
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}


import React from 'react';
import './LargePhotoByr.css';

function LargePhotoByr() {
  return (
    <div className="large-photo-byr">
      <img src="/images/classroom.jpg" alt="Students in a classroom" />
      <div className="overlay-byr">
        <h3>Discover Your Potential</h3>
        <p>Join our diverse community of learners</p>
      </div>
    </div>
  );
}

export default LargePhotoByr;


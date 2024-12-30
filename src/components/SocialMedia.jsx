import React from 'react';
import './SocialMedia.css';

function SocialMedia(props) {
  return (
    <div className="socialcard">
      <div className="border-wrap">
        <img src={props.src} alt="Social Media Icon" />
      </div>
    </div>
  );
}

export default SocialMedia;

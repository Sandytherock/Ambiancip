import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,          // Adds the navigation dots
    infinite: true,      // Loops through the images
    speed: 500,          // Transition speed
    slidesToShow: 1,     // Show 1 image at a time
    slidesToScroll: 1,   // Scroll 1 image at a time
    arrows: true,        // Adds left/right arrows
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

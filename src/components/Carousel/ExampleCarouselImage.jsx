import React from 'react';

function ExampleCarouselImage({ imageSrc, altText }) {
  return (
    <img
      src={imageSrc}
      alt={altText}
      style={{ width: '100%', height: '500px', objectFit: 'cover',borderRadius:'20px' }} // Use 'contain' to fit different aspect ratios
    />
  );
}

export default ExampleCarouselImage;
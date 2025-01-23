import React from 'react';
import '../styles/style.css';

// Use require.context to dynamically import all images from src/assets
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('/src/assets', false, /\.(png|jpe?g|svg)$/));

function Photography() {
  return (
    <div className="photography-page">
      <h2>My Shots   </h2>
      <p>This is a collection of some of my photos through out the many years!</p>
      <div className="masonry-grid">
        {images.map((imageSrc, idx) => (
          <div className="masonry-item" key={idx}>
            <img src={imageSrc} alt={`Photo ${idx}`} className="photo-item" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photography;

import React from 'react';
import { Link } from 'react-router-dom';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.urls.small} alt={image.alt_description} />
          <Link to={`/add-caption/${image.id}`}>
            <button>Add Caption</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

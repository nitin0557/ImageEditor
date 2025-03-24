import React from 'react';
import { Link } from 'react-router-dom';
import { Image, ImageGridContainer, SearchButton } from '../style/SearchPage';

const ImageGrid = React.memo(({ images }) => {
  return (
    <ImageGridContainer>
      {images.map(({ id, urls, alt_description }) => (
        <div key={id} className='image-card'>
          <Image src={urls.small} alt={alt_description || 'Image from Unsplash'} loading="lazy" />
          <Link to={`/add-caption/${id}`}>
            <SearchButton>Add Caption</SearchButton>
          </Link>
        </div>
      ))}
      
    </ImageGridContainer>
  );
});

export default ImageGrid;

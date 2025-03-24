import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from './ImageGrid';
import Header from './Header';
import '../style/SearchPage.css'; // Import CSS for styling

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const UNSPLASH_ACCESS_KEY = '7To0Rjwsuimo3buWJmlk8l5ju-e3x3K1EuM4TdeZnQk';

  // Debouncing: Update debounced search term after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch images when debounced search term changes
  useEffect(() => {
    const fetchImages = async () => {
      if (debouncedSearchTerm) {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${debouncedSearchTerm}&client_id=${UNSPLASH_ACCESS_KEY}`
          );
          setImages(response.data.results);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
    };

    fetchImages();
  }, [debouncedSearchTerm]);

  return (
    <div className="search-page">
      <Header />
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter your search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={() => setDebouncedSearchTerm(searchTerm)} className="search-button">
          Search
        </button>
      </div>
      <ImageGrid images={images} />
    </div>
  );
};

export default SearchPage;

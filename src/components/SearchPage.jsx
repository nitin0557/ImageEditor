import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from './ImageGrid';
import Header from './Header';
import { SearchBox, SearchButton, SearchInput, SearchPageContainer } from '../style/SearchPage';

const UNSPLASH_ACCESS_KEY = '7To0Rjwsuimo3buWJmlk8l5ju-e3x3K1EuM4TdeZnQk';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm) {
        fetchImages(searchTerm);
      }
    }, 500); // 500ms delay

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <SearchPageContainer>
      <Header />
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="Enter your search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={() => fetchImages(searchTerm)}>Search</SearchButton>
      </SearchBox>
      <ImageGrid images={images} />
    </SearchPageContainer>
  );
};

export default SearchPage;

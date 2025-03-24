import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import AddCaptionPage from './components/AddCaptionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/add-caption/:imageId" element={<AddCaptionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const SearchPage = lazy(() => import('./components/SearchPage'));
const AddCaptionPage = lazy(() => import('./components/AddCaptionPage/AddCaptionPage'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/ImageEditor" element={<SearchPage />} />
            <Route path="/add-caption/:imageId" element={<AddCaptionPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BookMarketplace from './components/BookMarketplace';
import PoemSubmissionForm from './components/PoemSubmissionForm';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<BookMarketplace />} />
        <Route path="/submission" element={<PoemSubmissionForm />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <img src="https://ugc.production.linktr.ee/oyw2auVySne9fNddv5UZ_Azp061gI40pEj93Y" alt="Company Logo" /> {/* Update the path to your logo */}
        <h1>Welcome to Our Book Company</h1>
        <p>Explore our collection of books or submit your own poems!</p>
        <div className="buttons">
          <Link to="/marketplace" className="btn">Book Marketplace</Link>
          <Link to="/submission" className="btn">Poem Submission</Link>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;

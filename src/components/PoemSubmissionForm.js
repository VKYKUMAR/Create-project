// src/components/PoemSubmissionForm.js
import React from 'react';

const PoemSubmissionForm = () => {
  // Add form handling logic here

  return (
    <div className="submission-form">
      <form>
        <label htmlFor="poem-title">Poem Title:</label>
        <input type="text" id="poem-title" name="poem-title" required />

        <label htmlFor="poem-body">Poem Body:</label>
        <textarea id="poem-body" name="poem-body" rows="4" required></textarea>

        <label htmlFor="author-name">Author's Name:</label>
        <input type="text" id="author-name" name="author-name" required />

        <button type="submit">Submit Poem</button>
      </form>
    </div>
  );
}

export default PoemSubmissionForm;

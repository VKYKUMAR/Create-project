// src/components/BookMarketplace.js
import React from 'react';

const BookMarketplace = () => {
  const booksData = [
    { title: 'Book 1', author: 'Author 1', price: '$19.99', description: 'A captivating story about...' },
    // Add more books as needed
  ];

  return (
    <div className="book-container">
      {booksData.map((book, index) => (
        <div className="book-card" key={index}>
          <img src="book-cover.jpg" alt={`${book.title} Cover`} />
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> {book.price}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookMarketplace;

// BookList.js
import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  const handleEdit = (index) => {
    const bookToEdit = books[index];
    onEdit(index, bookToEdit);
  };

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
      
        {books.map((book, index) => (
          <li key={index}>
            <div>
              <strong>{book.name}</strong> by {book.author} - ${book.price}
              <p>{book.shortDescription}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

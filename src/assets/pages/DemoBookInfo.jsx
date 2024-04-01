// App.js
import React, { useState } from 'react';
import AddEditBookForm from './DemoAddEditBookForm';
import BookList from './DemoBookList';

// import './App.css';


function DemoBookInfo() {
    const [books, setBooks] = useState([]);
    const [editIndex, setEditIndex] = useState(null); // Track the index of the book being edited
  
    const addBook = (book) => {
      setBooks([...books, book]);
    };
  
    const editBook = (index, updatedBook) => {
      const newBooks = [...books];
      newBooks[index] = updatedBook;
      setBooks(newBooks);
      setEditIndex(null); // Reset editIndex after editing
    };
  
    const deleteBook = (index) => {
      const newBooks = [...books];
      newBooks.splice(index, 1);
      setBooks(newBooks);
    };
  
    return (
      <div className="App">
        <h1>Book Management System</h1>
        {editIndex !== null ? (
          <AddEditBookForm
            onSubmit={(book) => editBook(editIndex, book)}
            initialBook={books[editIndex]}
          />
        ) : (
          <AddEditBookForm onSubmit={addBook} />
        )}
        <BookList
          books={books}
          onEdit={(index) => setEditIndex(index)} // Set editIndex when editing
          onDelete={deleteBook}
        />
      </div>
    );
  }

export default DemoBookInfo;

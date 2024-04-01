// AddEditBookForm.js
import React, { useState, useEffect } from 'react';

function AddEditBookForm({ onSubmit, initialBook }) {
  const [book, setBook] = useState(initialBook || {});
 
  useEffect(() => { 
    setBook(initialBook || {});
  }, [initialBook]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({});
  };


  
  return (
    <div>
      <h2>{initialBook ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Book Name"
          value={book.name || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={book.author || ''}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price || ''}
          onChange={handleChange}
        />
        <textarea
          name="shortDescription"
          placeholder="Short Description"
          value={book.shortDescription || ''}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="description"
          placeholder="Description"
          value={book.description || ''}
          onChange={handleChange}
        ></textarea>
        <button type="submit">{initialBook ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default AddEditBookForm;

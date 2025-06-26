const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Step 4: In-memory array to store books
let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' }
];

// Step 5: GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Step 6: POST add new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Step 7: PUT update book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  books = books.map(book => book.id === bookId ? updatedBook : book);
  res.json(updatedBook);
});

// Step 8: DELETE book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(book => book.id !== bookId);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
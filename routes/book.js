const {
  addBookController,
  getAllBookController,
  getBookByIdController,
  editBookById,
  deleteBookById,
} = require('../controller/book.controller');

const bookRouter = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookController,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookController,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdController,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookById,
  },
];

module.exports = bookRouter;

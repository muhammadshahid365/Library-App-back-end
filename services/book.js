const book = require('../daos/book');
const bookDAO = require('../daos/book')

class BookService{
  createBook = async params => await bookDAO.createBook(params);
  getAllBooks = async () => await bookDAO.getAllBooks();
  getBook = async id => await bookDAO.getBook(id);
  updateBook = async (id, params) => bookDAO.updateBook(id, params);
}

module.exports = new BookService();
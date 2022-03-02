const bookDAO = require('../daos/book')

class BookService{
  createBook = async params => await bookDAO.createBook(params);
  getAllBooks = async () => await bookDAO.getAllBooks();
}

module.exports = new BookService();
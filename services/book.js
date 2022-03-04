const book = require('../daos/book');
const bookDAO = require('../daos/book')

class BookService{
  createBook = async params => await bookDAO.createBook(params);
  getAllBooks = async () => await bookDAO.getAllBooks();
  getBook = async id => await bookDAO.getBook(id);
  updateBook = async (data) => bookDAO.updateBook(data.id, data.params);
}

module.exports = new BookService();
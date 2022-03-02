const bookService = require('../services/book')

class BooksController{
  createBook = async (req, res) => {
    try {
      let id = await bookService.createBook(req.body)
      res.json(id)
    } catch (error) {
      res.json(error.message);
    }
  }

  getAllBooks = async (req, res) => {
    try {
      let books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.json(error.message);
    }
  }
}

module.exports = new BooksController();

const bookService = require('../services/book')

class BooksController {
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
      if (req.query.id) {
        this.getBook(parseInt(req.query.id), res)
      } else {
        let books = await bookService.getAllBooks();
        res.json(books);
      }

    } catch (error) {
      res.json(error.message);
    }
  }

  getBook = async (id, res) => {
    let book = await bookService.getBook(id);
    res.json(book)
  }

  updateBook = async (req, res) => {
    try {
      await bookService.updateBook(req.query.id, req.body);
      res.json('updated')
    } catch (error) {
      res.json(error.message);
    }
  }
}

module.exports = new BooksController();

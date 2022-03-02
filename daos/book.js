const db = require('../db/db');

class BookDAO{
  createBook = async params => {
    let id = await db('books')
      .insert(params)
      .returning('id');

    return id;
  };

  getAllBooks = async () => db('books').select('*')
}

module.exports = new BookDAO();
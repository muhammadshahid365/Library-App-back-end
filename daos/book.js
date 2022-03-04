const db = require('../db/db');

class BookDAO{
  createBook = async params => {
    let id = await db('books')
      .insert(params)
      .returning('id');

    return id;
  };

  getAllBooks = async () => db('books').select('*')

  getBook = async id => db('books').where({id}).select('*')

  updateBook = async (id, params) => {
    await db('books')
      .where({id})
      .update(params)
  }
}

module.exports = new BookDAO();
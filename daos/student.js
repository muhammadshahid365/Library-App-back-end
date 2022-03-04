const db = require("../db/db");

class StudentDAO{
  createStudent = async params => {
    let id = await db('students')
      .insert(params)
      .returning('id');

    return id;
  }

  getAllStudents = async () => await db('students').select('*');
  updateStudent = async (id, params) => {
    await db('students')
      .where({id})
      .update(params)
  }
}

module.exports = new StudentDAO();
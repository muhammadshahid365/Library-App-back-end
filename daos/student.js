const db = require("../db/db");

class StudentDAO{
  creatStudent = async params => {
    let id = await db('students')
      .insert(params)
      .returning('id');

    return id;
  }

  getAllStudents = async () => await db('students').select('*');
}

module.exports = new StudentDAO();
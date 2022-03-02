const studentDAO = require('../daos/student');

class StudentService{
  createStundet = async params => await studentDAO.createStudent(params);
  getAllStudents = async () => await studentDAO.getAllStudents();
}

module.exports = new StudentService();
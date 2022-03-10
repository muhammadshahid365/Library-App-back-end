const studentDAO = require('../daos/student');

class StudentsService {
  createStudent = async params => await studentDAO.createStudent(params);
  getAllStudents = async () => await studentDAO.getAllStudents();
  getStudent = async id => await studentDAO.getStudent(id);
  updateStudent = async (id, params) => studentDAO.updateStudent(id, params);
}

module.exports = new StudentsService();
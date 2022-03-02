const studentService = require('../services/student');

class StudentsController{
  createStudent = async (req, res) => {
    try {
      let id = await studentService.createStundet(req.body);
      res.json(id);
    } catch (error) {
      res.json(error.message);
    }
  }

  getAllStudents = async (req, res) => {
    try {
      let students = await studentService.getAllStudents();
      res.json(students);
    } catch (error) {
      res.json(error.message);
    }
  }
}

module.exports = new StudentsController();
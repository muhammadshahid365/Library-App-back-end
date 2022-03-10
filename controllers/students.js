const studentsService = require('../services/student');

class StudentsController {
  createStudent = async (req, res) => {
    try {
      const id = await studentsService.createStudent(req.body)
      res.json({id})
    } catch (error) {
      res.json(error.message)
    }
  }

  getAllStudents = async (req, res) => {
    try {
      if(req.query.id){
        const student = await this.getStudent(req.query.id)
        res.json(student)
      } else {
        const students = await studentsService.getAllStudents();
        res.json(students);
      }
    } catch (error) {
      res.json(error.message);
    }
  }

  getStudent = async (id) => await studentsService.getStudent(id)

  updateStudent = async (req, res) => {
    try {
      await studentsService.updateStudent(req.query.id, req.body)
      res.json('Updated')
    } catch (error) {
      res.json(error.message)
    }
  }
}

module.exports = new StudentsController()
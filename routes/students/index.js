const express = require('express');
const studentsController = require('../../controllers/students')

const router = express.Router()

router.get('/', studentsController.getAllStudents);
router.post('/', studentsController.createStudent);

module.exports = router
const express = require('express');
const booksRouter = require('./books');
const studentsRouter = require('./students');

const router = express.Router();

router.use('/books', booksRouter);
router.use('/students', studentsRouter);

module.exports = router;
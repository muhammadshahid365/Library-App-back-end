const express = require('express');
const bookController = require('../../controllers/books')

const router = express.Router()

router.get('/', bookController.getAllBooks)
router.post('/', bookController.createBook)
router.patch('/', bookController.updateBook)

module.exports = router
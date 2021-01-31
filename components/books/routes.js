const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {validatePostError} = require('../../middlewares')
const {
    validateContentDataBook,
    validateExistsBook
} = require('../../middlewares/validateBook');
router.get('/pagination', controller.getPagination)
router.get('/:id', controller.getBookById);
router.get('/', controller.getBooks);
router.post('/', validateContentDataBook(),validateExistsBook, validatePostError, controller.postBook);
router.put('/:id', controller.updateBook);
router.delete('/:id',controller.deleteBook)
module.exports = router;
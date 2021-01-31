const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {validatePostError} = require('../../middlewares')
const {
    validateContentDataRental,
    validateBookRentado,
    validateExistsBook,
    validateUserExists
} = require('../../middlewares/validateRental');
router.get('/pagination', controller.getPagination)
router.get('/:id', controller.getRentalById);
router.get('/', controller.getRentals);
router.get('/book/:id', controller.getRentalByBook);
router.post('/', validateContentDataRental(), validateUserExists, validateExistsBook, validateBookRentado, validatePostError, controller.postRental);
router.delete('/:id', controller.deleteRental)
module.exports = router;
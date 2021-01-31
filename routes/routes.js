const express = require("express");
const router = express.Router();
const books = require('../components/books/routes');
const rental = require('../components/rentals/routes');
const users = require('../components/users/routes');

router.use('/users', users);
router.use('/books', books);
router.use('/rental', rental);
module.exports = router;

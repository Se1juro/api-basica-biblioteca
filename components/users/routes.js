const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {destroySession} = require('../../services/sessions')
const {validatePostError} = require('../../middlewares')
const {
    validateContentDataUser, validateExistsUser,
    validateLoginUser, validateSessionUser
} = require('../../middlewares/validateUser');
router.get('/authme', controller.authMe);
router.get('/pagination', controller.getPagination)
router.get('/:id', controller.getUserById);
router.get('/', controller.getUsers);
router.post('/', validateContentDataUser(), validatePostError, validateExistsUser, controller.postUser);
router.post('/login', validateLoginUser, controller.loginUser);
router.post('/logout', destroySession)
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
module.exports = router;
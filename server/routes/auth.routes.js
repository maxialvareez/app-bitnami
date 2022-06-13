const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifySignup = require('../middleware/verifySignup');

//Seguir poniendo middlewares

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],authController.register);
router.post('/signin', authController.login);

module.exports = router;
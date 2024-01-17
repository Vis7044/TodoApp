const express = require('express');
const { signup, login,signOut } = require('../controller/authController');


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/signout', login);


module.exports = router
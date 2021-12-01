const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.post('/create', authController.createAccount);

// router.post('/login', authController.loginPOST);

router.get('/login', authController.loginGET);

// router.post('/logout', authController.logout);

module.exports=router
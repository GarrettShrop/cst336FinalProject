const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.get('/create-account', authController.createAccount);

// router.post('/login', authController.loginPOST);

router.get('/login', authController.loginGET);

// router.post('/logout', authController.logout);

module.exports=router
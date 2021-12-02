const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


router.get('/create-account', authController.createAccountPage);


router.post('/create-account', authController.createAccount);

// router.post('/create', authController.createAccountlogic);

// router.get('/create', authController.createAccountGET);
// router.post('/login', authController.loginPOST);

router.get('/login', authController.loginGET);

// router.post('/logout', authController.logout);

module.exports=router
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/create-account', authController.createAccountPage);


router.post('/create-account', authController.createAccount);

// router.post('/create', authController.createAccountlogic);

router.delete('/delete', authController.deleteAccount);

// router.get('/create', authController.createAccountGET);
router.post('/login', authController.checkLoginInfo);

router.get('/login', authController.loginGET);

router.get('/profile', authController.profile);
// need to add function to logout and pass in veerify token to make sure user is logged in

router.post('/logout', [ authController.verifyToken, authController.logoutPOST]);

module.exports=router
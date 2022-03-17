const express = require('express');
const auth = require('../controllers/authController');
const router = express.Router();

const reviewController = require('../controllers/reviewController');

router.post('/',[auth.verifyToken, reviewController.create]);

router.get('/', reviewController.mainPage);

router.get('/getReviews/:id', reviewController.stationReviews);

router.delete('/delete',[auth.verifyToken, reviewController.delete]);

router.patch('/edit',[auth.verifyToken, reviewController.edit]);

module.exports=router

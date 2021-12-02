const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.create);

router.get('/', reviewController.mainPage);

router.delete('/delete', reviewController.delete);

router.patch('/edit', reviewController.edit);

module.exports=router

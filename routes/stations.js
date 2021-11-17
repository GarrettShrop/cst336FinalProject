const express = require('express');
const router = express.Router();

const stationsController = require('../controllers/stationsController');


router.get('/', stationsController.stationsPage);

module.exports=router
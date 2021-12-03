const express = require('express');
const router = express.Router();

const stationsController = require('../controllers/stationsController');
const {createStation} = require("../controllers/stationsController");


router.get('/', stationsController.stationsPage);

router.get('/station/:id', stationsController.stationPage);

router.get('/create-station', stationsController.createStationPage);

router.post('/create', stationsController.create);

// router.post('/station/:id', stationsController.delete);

router.post('/update', stationsController.update);

module.exports=router
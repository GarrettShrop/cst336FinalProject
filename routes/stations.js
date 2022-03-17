const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');
const stationsController = require('../controllers/stationsController');

router.get('/', stationsController.stationsPage);

router.get('/station/:id', stationsController.getStation);

router.get('/create-station', [auth.verifyToken, stationsController.createStationPage]);

router.post('/create',[ auth.verifyToken, stationsController.create]);

router.post('/stationDelete', stationsController.delete);

router.post('/stationAddtoFavorite', [auth.verifyToken, stationsController.favorite]);

router.post('/update', [ auth.verifyToken, stationsController.update]);

module.exports=router
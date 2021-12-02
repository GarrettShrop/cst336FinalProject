const express = require('express');
const router = express.Router();

const stationsController = require('../controllers/stationsController');
const {createStation} = require("../controllers/stationsController");


router.get('/', stationsController.stationsPage);

router.get('/create-station', stationsController.createStationPage);

router.post('/create', stationsController.create);

router.delete('/delete', stationsController.delete);

router.patch('/update', stationsController.update);

module.exports=router
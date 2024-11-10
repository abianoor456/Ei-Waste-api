const express = require('express');
const cooking = require('../controllers/cooking');
const router = express.Router();

router.get('/getBatches', cooking.getBatchesByStatusAndDate);

router.get('/getCapacity', cooking.getCapacity);

module.exports = router;
